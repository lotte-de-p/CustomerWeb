import { StyleConfigurationInterface } from '../interface/styleConfiguration.interface';
import { LiquidColorEnum } from '../enums/liquid-color.enum';
import { TextColorEnum } from '../enums/text-color.enum';

export class ChartConfiguration {
  private readonly _offSet = 50;
  private _style: StyleConfigurationInterface;

  constructor(
    private readonly _iconClass: string,
    private readonly _iconName: string,
    private readonly _iconColor: TextColorEnum,
    private readonly _title: string,
    private readonly _titleColor: TextColorEnum,
    private readonly _subtitle: string,
    private readonly _subtitleColor: TextColorEnum,
    private readonly _liquidColor: LiquidColorEnum,
    private readonly _liquidLevelPercentage: number,
    private readonly _hideShadow: boolean,
    private readonly _showBorderWaves: boolean
  ) {
    this.setStyleConfig();
  }

  get hideShadow(): boolean {
    return this._hideShadow;
  }

  get iconColor(): string {
    return this._iconColor;
  }

  get style(): StyleConfigurationInterface {
    return this._style;
  }

  get iconClass(): string {
    return this._iconClass;
  }

  get iconName(): string {
    return this._iconName;
  }

  get liquidColor(): LiquidColorEnum {
    return this._liquidColor;
  }

  get title(): string {
    return this._title;
  }

  get titleColor(): TextColorEnum {
    return this._titleColor;
  }

  get subtitle(): string {
    return this._subtitle;
  }

  get subtitleColor(): TextColorEnum {
    return this._subtitleColor;
  }

  get showBorderWaves(): boolean {
    return this._showBorderWaves;
  }

  get liquidLevelPercentage(): number {
    return this._liquidLevelPercentage;
  }

  private setStyleConfig(): void {
    const liquidTop = this._liquidLevelPercentage === 100 ? -70 : this._offSet - this._liquidLevelPercentage;
    this._style = {
      top: liquidTop + '%',
      marginTop: liquidTop * -1 + '%',
    };
  }
}
