export class SalesRedirectUrlBuilder {
  private redirectUrl: string;
  addFlowParam(salesUrl: string, isCidCampaign: boolean): SalesRedirectUrlBuilder {
    this.redirectUrl = salesUrl + (isCidCampaign ? '&' : '?') + 'flow=marketing';
    return this;
  }
  addIntentParam(intent: string): SalesRedirectUrlBuilder {
    if (intent !== '') {
      this.redirectUrl = this.redirectUrl + '&intent=' + intent;
    }
    return this;
  }
  addSDataParam(compressedJSON: unknown): SalesRedirectUrlBuilder {
    this.redirectUrl = this.redirectUrl + '&sdata=' + compressedJSON;
    return this;
  }

  build(): string {
    return this.redirectUrl;
  }
}

export class SalesRedirectUrlBuilderFactory {
  static buildRedirection() {
    return new SalesRedirectUrlBuilder();
  }
}
