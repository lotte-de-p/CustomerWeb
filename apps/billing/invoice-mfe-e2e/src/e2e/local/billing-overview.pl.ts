import { expect } from '@tools/e2e';
import { APPLICATION_PREFIX, test as baseTest, TestFixture } from '../billing-overview.fixture';

import userdetails from './mock/userdetails.json';
import billingAccounts from './mock/billing-accounts-mock.json';
import billingAccountsBussinessCustomer from './mock/billing-accounts-mock-with-bussiness-customer.json';
import reimbursementBillingAccount from './mock/billing-account-reimbursement-mock.json';
import invoices from './mock/invoices-1-mock.json';
import invoices2 from './mock/invoices-2-mock.json';
import invoices3 from './mock/invoices-3-mock.json';
import noInvoices from './mock/no-invoices-mock.json';
import noPaidInvoices from './mock/invoices-no-paid-mock.json';
import noUnpaidInvoices from './mock/invoices-no-unpaid-mock.json';
import reimbursement from './mock/invoices-reimbursement-mock.json';
import billScenarioInvoice from './mock/invoices-bill-scenario-1-mock.json';
import { BillingOverviewPage, InvoiceComponent } from '../../page-objects';
import dayjs from 'dayjs';

const INVOICE_EXPECTED_STATUS_TEXT = 'Te betalen voor 25 June';
const GET_INVOICES = '/public/api/customer-web-billing-invoice-cs/v1/billing-accounts/123456/invoices';
const GET_INVOICES_DIRECT_DEBIT_DECLINED =
  '/public/api/customer-web-billing-invoice-cs/v1/billing-accounts/123456 - DD failed/invoices';
const GET_BILLING_ACCOUNTS = '/public/api/customer-web-billing-invoice-cs/v1/billing-accounts';
const BILLING_OVERVIEW_PATH = '/billing-overview/RESIDENTIAL';
const BILLING_OVERVIEW_SOHO_PATH = '/billing-overview/BUSINESS';
const INFO_ICON_CLASSES = 'icon-md icon-information-shape-filled color-notification--info--light';
const ERROR_ICON_CLASSES = 'icon-md icon-error-shape-filled color-notification--error--light';
const REDIRECT_URL = '/some-url?accountNumber=123456';

const test = baseTest.extend<TestFixture>({
  billingOverviewPage: async ({ page, billingOverviewPage }, use: Function) => {
    await page.route('/oauth/userdetails', async (route) => {
      await route.fulfill({ json: userdetails });
    });
    await page.route(GET_BILLING_ACCOUNTS, async (route) => {
      await route.fulfill({ json: billingAccounts });
    });
    await page.route(GET_INVOICES, async (route) => {
      await route.fulfill({ json: invoices });
    });
    await page.route(
      '/public/api/customer-web-billing-invoice-cs/v1/billing-accounts/987654/invoices',
      async (route) => {
        await route.fulfill({ json: invoices2 });
      }
    );
    await page.goto(BILLING_OVERVIEW_PATH);
    await page.waitForURL(BILLING_OVERVIEW_PATH);
    await use(billingOverviewPage);
  },
});

test.describe(`${APPLICATION_PREFIX}: Billing Overview`, () => {
  test('should render the page', async ({ billingOverviewPage }: { billingOverviewPage: BillingOverviewPage }) => {
    await expect(billingOverviewPage.root).toBeVisible();
  });

  test('should show paid and unpaid invoices', async ({
    billingOverviewPage,
  }: {
    billingOverviewPage: BillingOverviewPage;
  }) => {
    await expect(billingOverviewPage.unpaidInvoices).toHaveCount(3);
    await checkUnpaidInvoice(
      billingOverviewPage.getUnpaidInvoice(0),
      'bill',
      '10 March',
      '12,34 €',
      undefined,
      ERROR_ICON_CLASSES,
      `${dayjs().diff(dayjs('2022-03-10'), 'day')} dagen te laat.`
    );
    await checkUnpaidInvoice(
      billingOverviewPage.getUnpaidInvoice(1),
      'bill',
      '24 June',
      '35,15 €',
      undefined,
      INFO_ICON_CLASSES,
      INVOICE_EXPECTED_STATUS_TEXT
    );
    await checkUnpaidInvoice(
      billingOverviewPage.getUnpaidInvoice(2),
      'bill',
      '24 June',
      '12,67 €',
      'Resterend van 56,78 €',
      INFO_ICON_CLASSES,
      INVOICE_EXPECTED_STATUS_TEXT
    );

    await expect(billingOverviewPage.paidInvoices).toHaveCount(3);
    await checkPaidInvoice(billingOverviewPage.getPaidInvoice(0), 'bill', '26 June', '123,45 €');
    await checkPaidInvoice(billingOverviewPage.getPaidInvoice(1), 'bill', '26 May', '145,45 €');
    await checkPaidInvoice(billingOverviewPage.getPaidInvoice(2), 'euro-arrow-counterclockwise', '10 July', '-24,97 €');

    await billingOverviewPage.loadMore.click();
    await expect(billingOverviewPage.loadMore).toBeHidden();

    await expect(billingOverviewPage.paidInvoices).toHaveCount(6);
    await checkPaidInvoice(billingOverviewPage.getPaidInvoice(0), 'bill', '26 June', '123,45 €');
    await checkPaidInvoice(billingOverviewPage.getPaidInvoice(1), 'bill', '26 May', '145,45 €');
    await checkPaidInvoice(billingOverviewPage.getPaidInvoice(2), 'euro-arrow-counterclockwise', '10 July', '-24,97 €');
    await checkPaidInvoice(billingOverviewPage.getPaidInvoice(3), 'bill', '10 March', '345,56 €');
    await checkPaidInvoice(billingOverviewPage.getPaidInvoice(4), 'bill', '10 March', '24,97 €');
    await checkPaidInvoice(billingOverviewPage.getPaidInvoice(5), 'bill', '10 February', '543,00 €');

    await expect(billingOverviewPage.allLoaded).toBeVisible();
  });

  test('should show paid and unpaid invoices for other account', async ({ billingOverviewPage }) => {
    await expect(billingOverviewPage.billingAccountSelector.selected).toHaveText('123456');
    await billingOverviewPage.billingAccountSelector.open();
    await expect(billingOverviewPage.billingAccountSelector.list).toBeVisible();
    await expect(billingOverviewPage.billingAccountSelector.items).toHaveCount(4);
    await billingOverviewPage.billingAccountSelector.items.nth(1).click();
    await expect(billingOverviewPage.billingAccountSelector.selected).toHaveText('987654');
    await expect(billingOverviewPage.unpaidInvoices).toHaveCount(1);
    await checkUnpaidInvoice(billingOverviewPage.getUnpaidInvoice(0), 'bill', '24 June', '1.234,56 €');
  });

  test('should show error if call failed', async ({ page, billingOverviewPage }) => {
    await page.route(GET_INVOICES, async (route) => {
      await route.fulfill({
        status: 404,
        json: { error: 'error' },
      });
    });
    await expect(billingOverviewPage.error).toBeVisible();
  });

  test('should show message if no bills', async ({ page, billingOverviewPage }) => {
    await page.route(GET_INVOICES, async (route) => {
      await route.fulfill({ json: noInvoices });
    });
    await expect(billingOverviewPage.billingAccountSelector.self).toBeVisible();
    await expect(billingOverviewPage.noBills).toBeVisible();
  });

  test('should show correct visuals if no paid invoices', async ({ page, billingOverviewPage }) => {
    await page.route(GET_INVOICES, async (route) => {
      await route.fulfill({ json: noPaidInvoices });
    });
    await page.goto(BILLING_OVERVIEW_PATH);
    await page.waitForURL(BILLING_OVERVIEW_PATH);
    await expect(billingOverviewPage.billingAccountSelector.self).toBeVisible();
    await expect(billingOverviewPage.unpaidInvoices).toHaveCount(1);
    await expect(billingOverviewPage.paidInvoices).toHaveCount(0);
  });

  test('should show correct visuals if no unpaid invoices', async ({ page, billingOverviewPage }) => {
    await page.route(GET_INVOICES, async (route) => {
      await route.fulfill({ json: noUnpaidInvoices });
    });
    await page.goto(BILLING_OVERVIEW_PATH);
    await page.waitForURL(BILLING_OVERVIEW_PATH);
    await expect(billingOverviewPage.billingAccountSelector.self).toBeVisible();
    await expect(billingOverviewPage.unpaidInvoices).toHaveCount(0);
    await expect(billingOverviewPage.paidInvoices).toHaveCount(3);
    await expect(billingOverviewPage.loadMore).toBeVisible();
  });

  test('should download the invoice', async ({ page, billingOverviewPage }) => {
    await page.route(
      '/ocapi/public/api/customer-web-billing-invoice-cs/v1/billing-accounts/123456/invoices/abcxxx',
      async (route) => {
        await route.fulfill({ body: '', contentType: 'application/pdf' });
      }
    );
    const downloadPromise = page.waitForEvent('download');
    const downloadButton = billingOverviewPage.getUnpaidInvoice(0).download;
    await expect(downloadButton).toBeVisible();
    await downloadButton.click();
    const download = await downloadPromise;
    await download.saveAs(`tmp/${download.suggestedFilename()}`);

    const downloadButton2 = billingOverviewPage.getUnpaidInvoice(1).download;
    await expect(downloadButton2).toBeVisible();
    await downloadButton2.click();
    await expect(billingOverviewPage.downloadErrorDialog.self).toBeVisible();
    await billingOverviewPage.downloadErrorDialog.close.click();
    await expect(billingOverviewPage.downloadErrorDialog.self).toBeHidden();
  });

  test('should show current payment method card', async ({ page, billingOverviewPage }) => {
    await expect(billingOverviewPage.settingsHeader).toBeVisible();
    await expect(billingOverviewPage.paymentMethod.self).toBeVisible();
    await expect(billingOverviewPage.paymentMethod.header).toHaveText('Betaalwijze');
    await expect(billingOverviewPage.paymentMethod.description).toHaveText('overschrijving');

    const settingsLink = billingOverviewPage.paymentMethod.settingsUrl;
    await expect(settingsLink).toBeVisible();
    await settingsLink.click();
    await page.waitForURL(REDIRECT_URL);
  });

  test('should show current dispatch method card', async ({ page, billingOverviewPage }) => {
    await expect(billingOverviewPage.settingsHeader).toBeVisible();
    await expect(billingOverviewPage.deliveryMethod.self).toBeVisible();
    await expect(billingOverviewPage.deliveryMethod.header).toHaveText('Ontvang via');
    await expect(billingOverviewPage.deliveryMethod.description).toBeVisible();
    await expect(billingOverviewPage.deliveryMethod.description).toHaveText('E-mail');
    await expect(billingOverviewPage.deliveryMethod.descriptionValue).toHaveText('xmwzezestbil@gmail.com');

    const settingsLink = billingOverviewPage.deliveryMethod.settingsUrl;
    await expect(settingsLink).toBeVisible();
    await settingsLink.click();
    await page.waitForURL(REDIRECT_URL);
  });

  test('should not show current dispatch method description if not present', async ({ page, billingOverviewPage }) => {
    await page.route(GET_BILLING_ACCOUNTS, async (route) => {
      await route.fulfill({
        json: JSON.parse(JSON.stringify(billingAccounts).replace('EMAIL', 'DOCCLE')),
      });
    });
    await page.goto(BILLING_OVERVIEW_PATH);
    await page.waitForURL(BILLING_OVERVIEW_PATH);
    await expect(billingOverviewPage.settingsHeader).toBeVisible();
    await expect(billingOverviewPage.deliveryMethod.self).toBeVisible();
    await expect(billingOverviewPage.deliveryMethod.header).toHaveText('Ontvang via');
    await expect(billingOverviewPage.deliveryMethod.description).toBeVisible();
    await expect(billingOverviewPage.deliveryMethod.description).toHaveText('Doccle');
    await expect(billingOverviewPage.deliveryMethod.descriptionValue).toBeHidden();

    const settingsLink = billingOverviewPage.deliveryMethod.settingsUrl;
    await expect(settingsLink).toBeVisible();
    await settingsLink.click();
    await page.waitForURL(REDIRECT_URL);
  });

  test('should show one total pay button', async ({ page, billingOverviewPage }) => {
    await expect(billingOverviewPage.totalPayButton).toBeVisible();
    await expect(billingOverviewPage.totalPayButton).toHaveCount(1);
    await expect(billingOverviewPage.totalPayButton).toHaveText('Totaal 60,16 € betalen');
    await billingOverviewPage.totalPayButton.click();
    await page.waitForURL('/online-payment-url?accountNumber=123456');
  });

  test('should show one pay button per invoice for soho customers', async ({ page, billingOverviewPage }) => {
    await page.route(GET_BILLING_ACCOUNTS, async (route) => {
      await route.fulfill({ json: billingAccountsBussinessCustomer });
    });

    await page.goto(BILLING_OVERVIEW_SOHO_PATH);
    await page.waitForURL(BILLING_OVERVIEW_SOHO_PATH);
    await expect(billingOverviewPage.unpaidInvoices).toHaveCount(3);
    const unpaidInvoice1 = billingOverviewPage.getUnpaidInvoice(0);
    const unpaidInvoice2 = billingOverviewPage.getUnpaidInvoice(1);
    const unpaidInvoice3 = billingOverviewPage.getUnpaidInvoice(2);
    await checkUnpaidInvoice(
      unpaidInvoice1,
      'bill',
      '10 March',
      '12,34 €',
      undefined,
      ERROR_ICON_CLASSES,
      `${dayjs().diff(dayjs('2022-03-10'), 'day')} dagen te laat.`,
      'Betaal 12,34 €'
    );
    await checkUnpaidInvoice(
      unpaidInvoice2,
      'bill',
      '24 June',
      '35,15 €',
      undefined,
      INFO_ICON_CLASSES,
      INVOICE_EXPECTED_STATUS_TEXT,
      'Betaal 35,15 €'
    );
    await checkUnpaidInvoice(
      unpaidInvoice3,
      'bill',
      '24 June',
      '12,67 €',
      'Resterend van 56,78 €',
      INFO_ICON_CLASSES,
      INVOICE_EXPECTED_STATUS_TEXT,
      'Betaal 12,67 €'
    );
    await unpaidInvoice1.payButton.click();
    await page.waitForURL('/online-payment-url?accountNumber=123456&billNumber=abcxxx&ogmCode=+++490/5829/80701+++');
  });

  test('should show reimbursement text if total amount is below 0', async ({ page, billingOverviewPage }) => {
    await page.route(GET_INVOICES, async (route) => {
      await route.fulfill({ json: reimbursement });
    });
    await page.route(GET_BILLING_ACCOUNTS, async (route) => {
      await route.fulfill({ json: reimbursementBillingAccount });
    });
    await page.goto(BILLING_OVERVIEW_PATH);
    await page.waitForURL(BILLING_OVERVIEW_PATH);
    await expect(billingOverviewPage.noBills).toBeVisible();
    await expect(billingOverviewPage.noBillsReimbursement).toBeVisible();
    await expect(billingOverviewPage.noBillsReimbursement).toHaveText('Je krijgt nog 100,00 € terug van ons');
  });

  test('should show treatment message to customer if applicable', async ({ page, billingOverviewPage }) => {
    await page.goto(BILLING_OVERVIEW_PATH);
    await page.waitForURL(BILLING_OVERVIEW_PATH);
    await expect(billingOverviewPage.treatmentMessage).toBeVisible();
    await expect(billingOverviewPage.treatmentMessage).toHaveCount(1);
    await expect(billingOverviewPage.treatmentMessage).toHaveText(
      'Betaal zo snel mogelijk om extra kosten te vermijden.'
    );
  });

  [
    {
      currentPaymentMethod: 'MANUAL',
      dispatchMethod: 'SMS',
      check: async (billingOverviewPage: BillingOverviewPage) => {
        await expect(billingOverviewPage.paymentEncouragement).toBeVisible();
        await expect(billingOverviewPage.paymentEncouragement).toContainText('Automatisch betalen? Een slimme keuze!');
      },
    },
    {
      currentPaymentMethod: 'DIRECT_DEBIT',
      dispatchMethod: 'SMS',
      check: async (billingOverviewPage: BillingOverviewPage) => {
        await expect(billingOverviewPage.paymentEncouragement).toBeVisible();
        await expect(billingOverviewPage.paymentEncouragement).toContainText('Communiceer nu veiliger via Doccle');
      },
    },
    {
      currentPaymentMethod: 'DIRECT_DEBIT',
      dispatchMethod: 'DOCCLE',
      check: async (billingOverviewPage: BillingOverviewPage) => {
        await expect(billingOverviewPage.paymentEncouragement).toBeHidden();
      },
    },
  ].forEach(({ currentPaymentMethod, dispatchMethod, check }) => {
    test(`should show the correct payment encouragement (currentPaymentMethod: ${currentPaymentMethod}, dispatchMedhod: ${dispatchMethod})`, async ({
      page,
      billingOverviewPage,
    }) => {
      await page.route(GET_BILLING_ACCOUNTS, async (route) => {
        await route.fulfill({
          json: JSON.parse(
            JSON.stringify(billingAccounts).replace('MANUAL', currentPaymentMethod).replace('EMAIL', dispatchMethod)
          ),
        });
      });
      await page.goto(BILLING_OVERVIEW_PATH);
      await page.waitForURL(BILLING_OVERVIEW_PATH);
      await check(billingOverviewPage);
    });
  });

  test('should show direct debit declined message', async ({ page, billingOverviewPage }) => {
    await page.route(GET_INVOICES_DIRECT_DEBIT_DECLINED, async (route) => {
      await route.fulfill({ json: invoices3 });
    });
    await page.goto(BILLING_OVERVIEW_PATH);
    await page.waitForURL(BILLING_OVERVIEW_PATH);
    await billingOverviewPage.billingAccountSelector.open();
    await billingOverviewPage.billingAccountSelector.items.nth(3).click();
    await expect(billingOverviewPage.statusNotification).toContainText(
      'Automatische betaling gefaald, je moet je aanrekening online betalen'
    );
  });

  test('should export the invoices', async ({ page, billingOverviewPage }) => {
    await page.route(GET_BILLING_ACCOUNTS, async (route) => {
      await route.fulfill({ json: billingAccountsBussinessCustomer });
    });
    await page.route(
      '/public/api/customer-web-billing-invoice-cs/v1/billing-accounts/123456/invoices-overview?type=pdf&language=en',
      async (route) => {
        await route.fulfill({ body: '', contentType: 'application/pdf' });
      }
    );
    await page.goto(BILLING_OVERVIEW_SOHO_PATH);
    await page.waitForURL(BILLING_OVERVIEW_SOHO_PATH);
    const downloadPromise = page.waitForEvent('download');
    const exportInvoices = billingOverviewPage.exportInvoices;
    await exportInvoices.open();
    await exportInvoices.export('csv');
    await expect(exportInvoices.error).toBeVisible();
    await expect(exportInvoices.error).toContainText('csv exporteren mislukt, probeer opnieuw');
    await exportInvoices.export('zip');
    await expect(exportInvoices.error).toBeVisible();
    await expect(exportInvoices.error).toContainText('zip exporteren mislukt, probeer opnieuw');
    await exportInvoices.export('pdf');
    await expect(exportInvoices.error).toBeHidden();
    const download = await downloadPromise;
    await download.saveAs(`tmp/${download.suggestedFilename()}`);
  });

  test('should not be able to export as residential customer', async ({ page, billingOverviewPage }) => {
    await page.goto(BILLING_OVERVIEW_PATH);
    await page.waitForURL(BILLING_OVERVIEW_PATH);
    await expect(billingOverviewPage.exportInvoices.self).toBeHidden();
  });

  test('should show payment plan message if payment plan is active', async ({ page, billingOverviewPage }) => {
    await page.goto(BILLING_OVERVIEW_PATH);
    await page.waitForURL(BILLING_OVERVIEW_PATH);
    await expect(billingOverviewPage.paymentPlanMessage).toBeHidden();
    await billingOverviewPage.billingAccountSelector.open();
    await billingOverviewPage.billingAccountSelector.items.nth(3).click();
    await expect(billingOverviewPage.paymentPlanMessage).toBeVisible();
  });

  [
    {
      currentPaymentMethod: 'DIRECT_DEBIT',
      lastPaymentMethod: 'MANUAL',
      check: async (billingOverviewPage: BillingOverviewPage) => {
        await expect(billingOverviewPage.paymentMethodChangedIcon).toBeVisible();
        await expect(billingOverviewPage.paymentMethodChangedHeader).toBeVisible();
        await expect(billingOverviewPage.paymentMethodChangedHeader).toHaveText('Domiciliëring');
        await expect(billingOverviewPage.paymentMethodChangedDescription).toBeVisible();
        await expect(billingOverviewPage.paymentMethodChangedDescription).toHaveText(
          'Actief vanaf volgende aanrekening'
        );
      },
    },
    {
      currentPaymentMethod: 'MANUAL',
      lastPaymentMethod: 'DIRECT_DEBIT',
      check: async (billingOverviewPage: BillingOverviewPage) => {
        await expect(billingOverviewPage.paymentMethodChangedIcon).toBeVisible();
        await expect(billingOverviewPage.paymentMethodChangedHeader).toBeVisible();
        await expect(billingOverviewPage.paymentMethodChangedHeader).toHaveText('Overschrijving');
        await expect(billingOverviewPage.paymentMethodChangedDescription).toBeVisible();
        await expect(billingOverviewPage.paymentMethodChangedDescription).toHaveText(
          'Je hebt nog een openstaand saldo.  Als je onlangs overschakelde naar domiciliëring, vragen we je om de oudere openstaande facturen nog handmatig te betalen. Zo kunnen we je betalingsoverzicht updaten.'
        );
      },
    },
  ].forEach(({ currentPaymentMethod, lastPaymentMethod, check }) => {
    test(`should show the correct payment changed notification (currentPaymentMethod: ${currentPaymentMethod}, lastPaymentMethod: ${lastPaymentMethod})`, async ({
      page,
      billingOverviewPage,
    }) => {
      await page.route(GET_BILLING_ACCOUNTS, async (route) => {
        await route.fulfill({
          json: JSON.parse(
            JSON.stringify(billingAccounts)
              .replace('DIRECT_DEBIT', currentPaymentMethod)
              .replace('MANUAL', lastPaymentMethod)
          ),
        });
      });
      await page.goto(BILLING_OVERVIEW_PATH);
      await page.waitForURL(BILLING_OVERVIEW_PATH);
      await check(billingOverviewPage);
    });
  });

  test('should show current payment method card with payment change notification', async ({
    page,
    billingOverviewPage,
  }) => {
    await expect(billingOverviewPage.settingsHeader).toBeVisible();
    await expect(billingOverviewPage.paymentMethod.self).toBeVisible();
    await expect(billingOverviewPage.paymentMethod.header).toHaveText('Betaalwijze');
    await expect(billingOverviewPage.paymentMethod.description).toHaveText('overschrijving');
    await expect(billingOverviewPage.paymentMethod.paymentMethodChangeNotification).toHaveText(
      'Binnenkort naar domiciliëring'
    );

    const settingsLink = billingOverviewPage.paymentMethod.settingsUrl;
    await expect(settingsLink).toBeVisible();
    await settingsLink.click();
    await page.waitForURL(REDIRECT_URL);
  });

  test('should show bill scenario badges if bill scenarios present in invoice', async ({
    page,
    billingOverviewPage,
  }) => {
    await page.route(GET_INVOICES, async (route) => {
      await route.fulfill({ json: billScenarioInvoice });
    });
    await page.goto(BILLING_OVERVIEW_PATH);
    await page.waitForURL(BILLING_OVERVIEW_PATH);
    await expect(billingOverviewPage.billScenarios).toHaveCount(2);
    await expect(billingOverviewPage.unpaidBillScenario).toHaveCount(2);
  });

  async function checkPaidInvoice(
    invoice: InvoiceComponent,
    icon: string,
    date: string,
    amount: string,
    outstandingDebt?: string
  ) {
    await expect(invoice.icon).toHaveAttribute('ng-reflect-icon', icon);
    await expect(invoice.date).toContainText(date);
    await expect(invoice.amount).toContainText(amount.replace(' ', '\u00a0'));
    if (outstandingDebt) {
      await expect(invoice.remainingAmount).toContainText(outstandingDebt);
    }
  }

  async function checkUnpaidInvoice(
    invoice: InvoiceComponent,
    icon: string,
    date: string,
    amount: string,
    outstandingDebt?: string,
    invoiceStatusIconClass?: string,
    invoiceStatusText?: string,
    payButton?: string
  ) {
    await checkPaidInvoice(invoice, icon, date, amount, outstandingDebt);
    const status = invoice.status;
    if (invoiceStatusIconClass && invoiceStatusText) {
      await expect(status.locator('.icon-md')).toHaveClass(invoiceStatusIconClass);
      await expect(invoice.statusNotification).toHaveText(invoiceStatusText);
    } else {
      await expect(status).toBeHidden();
    }
    if (payButton) {
      await expect(invoice.payButton).toBeVisible();
      await expect(invoice.payButton).toHaveText(payButton);
    } else {
      await expect(invoice.payButton).toBeHidden();
    }
  }
});
