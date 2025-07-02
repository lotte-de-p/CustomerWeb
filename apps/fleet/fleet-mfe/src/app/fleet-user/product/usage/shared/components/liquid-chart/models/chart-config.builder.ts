import { TextColorEnum } from '../enums/text-color.enum';
import { LiquidColorEnum } from '../enums/liquid-color.enum';
import { ChartConfiguration } from './chart-configuration';
import isNull from 'lodash-es/isNull';
import isUndefined from 'lodash-es/isUndefined';
import isNaN from 'lodash-es/isNaN';

export class ChartConfigBuilder {
  private readonly _iconClass = '';
  private readonly _iconName = '';
  private readonly _iconColor: TextColorEnum = TextColorEnum.BLACK;
  private readonly _title = '';
  private readonly _titleColor: TextColorEnum = TextColorEnum.BLACK;
  private readonly _subtitle = '';
  private readonly _subtitleColor: TextColorEnum = TextColorEnum.BLACK;
  private readonly _liquidColor: LiquidColorEnum = LiquidColorEnum.YELLOW;
  private readonly _liquidLevelPercentage = 100;
  private readonly _hideShadow = false;
  private readonly _showBorderWaves = false;

  private updateValue(key: string, value): ChartConfigBuilder {
    if (!isNull(value) && !isUndefined(value) && !isNaN(value)) {
      this[key] = value;
    }
    return this;
  }

  setHideShadow(value: boolean): ChartConfigBuilder {
    return this.updateValue('_hideShadow', value);
  }

  setIconColor(value: TextColorEnum): ChartConfigBuilder {
    return this.updateValue('_iconColor', value);
  }

  setSubtitleColor(value: TextColorEnum): ChartConfigBuilder {
    return this.updateValue('_subtitleColor', value);
  }

  setIconClass(value: string): ChartConfigBuilder {
    return this.updateValue('_iconClass', value);
  }

  setIconName(value: string): ChartConfigBuilder {
    return this.updateValue('_iconName', value);
  }

  setTitle(value: string): ChartConfigBuilder {
    return this.updateValue('_title', value);
  }

  setTitleColor(value: TextColorEnum): ChartConfigBuilder {
    return this.updateValue('_titleColor', value);
  }

  setSubtitle(value: string): ChartConfigBuilder {
    return this.updateValue('_subtitle', value);
  }

  setLiquidColor(value: LiquidColorEnum): ChartConfigBuilder {
    return this.updateValue('_liquidColor', value);
  }

  setLiquidLevelPercentage(value: number): ChartConfigBuilder {
    return this.updateValue('_liquidLevelPercentage', value);
  }

  /**
   * @description
   * This will add wavy border to the liquid chart
   *
   * NOTE: Wave colors should be used for liquid along with
   *       this to achieve the wave
   *
   * @usageNotes
   * ### CORRECT WAY ###
   * ```
   *  const config = new ChartConfigBuilder()
   *      .setLiquidColor(LiquidColorEnum.YELLOW_WAVE)
   *      .setShowBorderWaves(true)
   *      .getChartConfiguration();
   * ```
   *
   * ### WRONG WAY ###
   * ```
   * const config = new ChartConfigBuilder()
   *      .setLiquidColor(LiquidColorEnum.YELLOW)
   *      .setShowBorderWaves(true)
   *      .getChartConfiguration();
   * ```
   *
   *
   */
  setShowBorderWaves(value: boolean): ChartConfigBuilder {
    return this.updateValue('_showBorderWaves', value);
  }

  getChartConfiguration(): ChartConfiguration {
    return new ChartConfiguration(
      this._iconClass,
      this._iconName,
      this._iconColor,
      this._title,
      this._titleColor,
      this._subtitle,
      this._subtitleColor,
      this._liquidColor,
      this._liquidLevelPercentage,
      this._hideShadow,
      this._showBorderWaves
    );
  }
}
