import { Injectable } from '@angular/core';
import { Builder } from '@telenet/ng-lib-shared';
import { NBAList } from '../models/nba-list.model';
import { SellingArgument } from '../models/selling-argument.model';
import { NBA } from '../models/nba.model';
import { SalesData } from '../../../../sales';
import * as i0 from "@angular/core";
export class NBAListMapper {
    toModel(response) {
        if (response && response.nextBestActions) {
            return this.createNBAListResponse(response.nextBestActions);
        }
        return new NBAList();
    }
    createNBAListResponse(rawNbaList) {
        return (Builder(NBAList)
            // @ts-ignore
            .actions(this.createNBAs(rawNbaList.actions))
            .customerNumber(rawNbaList.customerNumber)
            .interactionId(rawNbaList.interactionId)
            .channel(rawNbaList.channel)
            .containerName(rawNbaList.containerName)
            .v(rawNbaList.v)
            .isSuccess(true)
            .build());
    }
    createNBAs(rawActions) {
        if (!rawActions) {
            return [new NBA()];
        }
        return rawActions.map((rawAction) => {
            return (Builder(NBA)
                // @ts-ignore
                .sdata(new SalesData(rawAction.sdata))
                .rank(rawAction.rank)
                .group(rawAction.group)
                .issue(rawAction.issue)
                .name(rawAction.name)
                .treatment(rawAction.treatment)
                .campaignId(rawAction.campaignId)
                .productType(rawAction.productType)
                .sellingArguments(this.createSellingArguments(rawAction.sellingArguments))
                .build());
        });
    }
    createSellingArguments(rawSellingArguments) {
        return (rawSellingArguments &&
            rawSellingArguments.map((rawSellingArgument) => {
                return new SellingArgument(rawSellingArgument.key, rawSellingArgument.rank);
            }));
    }
    static ɵfac = function NBAListMapper_Factory(t) { return new (t || NBAListMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NBAListMapper, factory: NBAListMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NBAListMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmJhLWxpc3QubWFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3BlZ2EvbmJhL3YxL21hcHBlcnMvbmJhLWxpc3QubWFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBbUIsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBSzlDLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLE9BQU8sQ0FBQyxRQUFpQztRQUN2QyxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFFRCxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLHFCQUFxQixDQUFDLFVBQStCO1FBQzFELE9BQU8sQ0FDTCxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2QsYUFBYTthQUNaLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM1QyxjQUFjLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQzthQUN6QyxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQzthQUN2QyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQzthQUMzQixhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQzthQUN2QyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUNmLFNBQVMsQ0FBQyxJQUFJLENBQUM7YUFDZixLQUFLLEVBQUUsQ0FDWCxDQUFDO0lBQ0osQ0FBQztJQUVPLFVBQVUsQ0FBQyxVQUE2QjtRQUM5QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDaEIsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBRUQsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDbEMsT0FBTyxDQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQ1YsYUFBYTtpQkFDWixLQUFLLENBQUMsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztpQkFDcEIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7aUJBQ3RCLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2lCQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztpQkFDcEIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7aUJBQzlCLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO2lCQUNoQyxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztpQkFDbEMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUN6RSxLQUFLLEVBQUUsQ0FDWCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sc0JBQXNCLENBQUMsbUJBQXlDO1FBQ3RFLE9BQU8sQ0FDTCxtQkFBbUI7WUFDbkIsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtnQkFDN0MsT0FBTyxJQUFJLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUUsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7dUVBdERVLGFBQWE7Z0VBQWIsYUFBYSxXQUFiLGFBQWEsbUJBRlosTUFBTTs7aUZBRVAsYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdWlsZGVyLCBNYXBwZXJJbnRlcmZhY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItc2hhcmVkJztcbmltcG9ydCB7IE5CQUxpc3QgfSBmcm9tICcuLi9tb2RlbHMvbmJhLWxpc3QubW9kZWwnO1xuaW1wb3J0IHtcbiAgUmF3TkJBSW50ZXJmYWNlLFxuICBSYXdOQkFMaXN0SW50ZXJmYWNlLFxuICBSYXdOQkFSZXNwb25zZUludGVyZmFjZSxcbiAgUmF3U2VsbGluZ0FyZ3VtZW50LFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL3Jhdy1uYmEtbGlzdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2VsbGluZ0FyZ3VtZW50IH0gZnJvbSAnLi4vbW9kZWxzL3NlbGxpbmctYXJndW1lbnQubW9kZWwnO1xuaW1wb3J0IHsgTkJBIH0gZnJvbSAnLi4vbW9kZWxzL25iYS5tb2RlbCc7XG5pbXBvcnQgeyBTYWxlc0RhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi9zYWxlcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBOQkFMaXN0TWFwcGVyIGltcGxlbWVudHMgTWFwcGVySW50ZXJmYWNlPFJhd05CQVJlc3BvbnNlSW50ZXJmYWNlLCBOQkFMaXN0PiB7XG4gIHRvTW9kZWwocmVzcG9uc2U6IFJhd05CQVJlc3BvbnNlSW50ZXJmYWNlKTogTkJBTGlzdCB7XG4gICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLm5leHRCZXN0QWN0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTkJBTGlzdFJlc3BvbnNlKHJlc3BvbnNlLm5leHRCZXN0QWN0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBOQkFMaXN0KCk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlTkJBTGlzdFJlc3BvbnNlKHJhd05iYUxpc3Q6IFJhd05CQUxpc3RJbnRlcmZhY2UpOiBOQkFMaXN0IHtcbiAgICByZXR1cm4gKFxuICAgICAgQnVpbGRlcihOQkFMaXN0KVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIC5hY3Rpb25zKHRoaXMuY3JlYXRlTkJBcyhyYXdOYmFMaXN0LmFjdGlvbnMpKVxuICAgICAgICAuY3VzdG9tZXJOdW1iZXIocmF3TmJhTGlzdC5jdXN0b21lck51bWJlcilcbiAgICAgICAgLmludGVyYWN0aW9uSWQocmF3TmJhTGlzdC5pbnRlcmFjdGlvbklkKVxuICAgICAgICAuY2hhbm5lbChyYXdOYmFMaXN0LmNoYW5uZWwpXG4gICAgICAgIC5jb250YWluZXJOYW1lKHJhd05iYUxpc3QuY29udGFpbmVyTmFtZSlcbiAgICAgICAgLnYocmF3TmJhTGlzdC52KVxuICAgICAgICAuaXNTdWNjZXNzKHRydWUpXG4gICAgICAgIC5idWlsZCgpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlTkJBcyhyYXdBY3Rpb25zOiBSYXdOQkFJbnRlcmZhY2VbXSk6IE5CQVtdIHtcbiAgICBpZiAoIXJhd0FjdGlvbnMpIHtcbiAgICAgIHJldHVybiBbbmV3IE5CQSgpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmF3QWN0aW9ucy5tYXAoKHJhd0FjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgQnVpbGRlcihOQkEpXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIC5zZGF0YShuZXcgU2FsZXNEYXRhKHJhd0FjdGlvbi5zZGF0YSkpXG4gICAgICAgICAgLnJhbmsocmF3QWN0aW9uLnJhbmspXG4gICAgICAgICAgLmdyb3VwKHJhd0FjdGlvbi5ncm91cClcbiAgICAgICAgICAuaXNzdWUocmF3QWN0aW9uLmlzc3VlKVxuICAgICAgICAgIC5uYW1lKHJhd0FjdGlvbi5uYW1lKVxuICAgICAgICAgIC50cmVhdG1lbnQocmF3QWN0aW9uLnRyZWF0bWVudClcbiAgICAgICAgICAuY2FtcGFpZ25JZChyYXdBY3Rpb24uY2FtcGFpZ25JZClcbiAgICAgICAgICAucHJvZHVjdFR5cGUocmF3QWN0aW9uLnByb2R1Y3RUeXBlKVxuICAgICAgICAgIC5zZWxsaW5nQXJndW1lbnRzKHRoaXMuY3JlYXRlU2VsbGluZ0FyZ3VtZW50cyhyYXdBY3Rpb24uc2VsbGluZ0FyZ3VtZW50cykpXG4gICAgICAgICAgLmJ1aWxkKClcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVNlbGxpbmdBcmd1bWVudHMocmF3U2VsbGluZ0FyZ3VtZW50czogUmF3U2VsbGluZ0FyZ3VtZW50W10pOiBTZWxsaW5nQXJndW1lbnRbXSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHJhd1NlbGxpbmdBcmd1bWVudHMgJiZcbiAgICAgIHJhd1NlbGxpbmdBcmd1bWVudHMubWFwKChyYXdTZWxsaW5nQXJndW1lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZWxsaW5nQXJndW1lbnQocmF3U2VsbGluZ0FyZ3VtZW50LmtleSwgcmF3U2VsbGluZ0FyZ3VtZW50LnJhbmspO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=