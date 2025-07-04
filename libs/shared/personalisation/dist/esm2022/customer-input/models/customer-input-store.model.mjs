export class CustomerInputStore {
    isSuccess;
    constructor(customerInputStore) {
        this.isSuccess = true;
        if (customerInputStore) {
            Object.assign(this, customerInputStore);
        }
    }
    enrich(objStore) {
        return new CustomerInputStore(objStore);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItaW5wdXQtc3RvcmUubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY3VzdG9tZXItaW5wdXQvbW9kZWxzL2N1c3RvbWVyLWlucHV0LXN0b3JlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxrQkFBa0I7SUFDYixTQUFTLENBQVU7SUFFbkMsWUFBWSxrQkFBdUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDMUMsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsUUFBNEI7UUFDakMsT0FBTyxJQUFJLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRleHRIdWJNb2RlbEludGVyZmFjZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1wYWdlJztcblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVySW5wdXRTdG9yZSBpbXBsZW1lbnRzIENvbnRleHRIdWJNb2RlbEludGVyZmFjZTxDdXN0b21lcklucHV0U3RvcmU+IHtcbiAgcHVibGljIHJlYWRvbmx5IGlzU3VjY2VzczogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihjdXN0b21lcklucHV0U3RvcmU/OiBDdXN0b21lcklucHV0U3RvcmUpIHtcbiAgICB0aGlzLmlzU3VjY2VzcyA9IHRydWU7XG4gICAgaWYgKGN1c3RvbWVySW5wdXRTdG9yZSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjdXN0b21lcklucHV0U3RvcmUpO1xuICAgIH1cbiAgfVxuXG4gIGVucmljaChvYmpTdG9yZTogQ3VzdG9tZXJJbnB1dFN0b3JlKTogQ3VzdG9tZXJJbnB1dFN0b3JlIHtcbiAgICByZXR1cm4gbmV3IEN1c3RvbWVySW5wdXRTdG9yZShvYmpTdG9yZSk7XG4gIH1cbn1cbiJdfQ==