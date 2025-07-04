import { PromoModel } from './promo.model';
import { PeriodModel } from './period.model';
export class PromoModelTestfactory {
    static build(properties) {
        const promo = new PromoModel();
        promo.backendid = 1;
        promo.duration = 1;
        promo.legalid = 'test-promo';
        promo.name = 'test-promo';
        promo.period = new PeriodModel();
        promo.period.startDate = '2020-01-01';
        promo.period.endDate = '2050-01-01';
        promo.price = 50;
        promo.priceexclvat = 40;
        promo.puk = '123456';
        if (properties) {
            Object.keys(properties).forEach((key) => {
                if (properties[key] === null) {
                    delete promo[key];
                }
                else {
                    promo[key] = properties[key];
                }
            });
        }
        return promo;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW8ubW9kZWwudGVzdGZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21vZGVscy9wcm9tby5tb2RlbC50ZXN0ZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc3QyxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBeUI7UUFDcEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUMvQixLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNwQixLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNuQixLQUFLLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztRQUM3QixLQUFLLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztRQUMxQixLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDakMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztRQUNwQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNqQixLQUFLLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQztRQUVyQixJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDdEMsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQzdCLE9BQVEsS0FBaUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakQsQ0FBQztxQkFBTSxDQUFDO29CQUNMLEtBQWlDLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9tb01vZGVsIH0gZnJvbSAnLi9wcm9tby5tb2RlbCc7XG5pbXBvcnQgeyBQZXJpb2RNb2RlbCB9IGZyb20gJy4vcGVyaW9kLm1vZGVsJztcbmltcG9ydCB7IEtleVZhbHVlUGFpciB9IGZyb20gJy4uL2ludGVyZmFjZXMva2V5LXZhbHVlLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBQcm9tb01vZGVsVGVzdGZhY3Rvcnkge1xuICBzdGF0aWMgYnVpbGQocHJvcGVydGllcz86IEtleVZhbHVlUGFpcik6IFByb21vTW9kZWwge1xuICAgIGNvbnN0IHByb21vID0gbmV3IFByb21vTW9kZWwoKTtcbiAgICBwcm9tby5iYWNrZW5kaWQgPSAxO1xuICAgIHByb21vLmR1cmF0aW9uID0gMTtcbiAgICBwcm9tby5sZWdhbGlkID0gJ3Rlc3QtcHJvbW8nO1xuICAgIHByb21vLm5hbWUgPSAndGVzdC1wcm9tbyc7XG4gICAgcHJvbW8ucGVyaW9kID0gbmV3IFBlcmlvZE1vZGVsKCk7XG4gICAgcHJvbW8ucGVyaW9kLnN0YXJ0RGF0ZSA9ICcyMDIwLTAxLTAxJztcbiAgICBwcm9tby5wZXJpb2QuZW5kRGF0ZSA9ICcyMDUwLTAxLTAxJztcbiAgICBwcm9tby5wcmljZSA9IDUwO1xuICAgIHByb21vLnByaWNlZXhjbHZhdCA9IDQwO1xuICAgIHByb21vLnB1ayA9ICcxMjM0NTYnO1xuXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAocHJvcGVydGllc1trZXldID09PSBudWxsKSB7XG4gICAgICAgICAgZGVsZXRlIChwcm9tbyBhcyB1bmtub3duIGFzIEtleVZhbHVlUGFpcilba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAocHJvbW8gYXMgdW5rbm93biBhcyBLZXlWYWx1ZVBhaXIpW2tleV0gPSBwcm9wZXJ0aWVzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbW87XG4gIH1cbn1cbiJdfQ==