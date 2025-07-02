import { ButtonSize } from '../../../button/models/button.types';
import { IndicatorDirection } from '../../../../models/directions.types';
export declare class Indicator {
    direction: IndicatorDirection;
    size: ButtonSize;
    private readonly iconsNamesMap;
    render(): any;
}
