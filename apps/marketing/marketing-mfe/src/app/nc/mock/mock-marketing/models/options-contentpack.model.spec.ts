import * as OptionsContentPack from './options-contentpacks.model';

describe('OptionsContentPack', function () {
  const optionsList = OptionsContentPack.optionsList;
  it('Giga Speedboost', function () {
    expect(optionsList['internet']['INTF0200']['option'][0]['label']).toEqual('Giga Speedboost');
  });

  it('Volume Block 25GB', function () {
    expect(optionsList['internet']['INTB0001']['option'][0]['label']).toEqual('Volume Block 25GB');
  });

  it('Play Sports', function () {
    assertContentPack(11, 'Play Sports');
  });

  it('Passion XL', function () {
    assertContentPack(7, 'Passion XL');
  });

  it('Bouquet Family Fun', function () {
    assertContentPack(5, 'Bouquet Family Fun');
  });

  it('Bouquet Discover More', function () {
    assertContentPack(4, 'Bouquet Discover More');
  });

  it('Bouquet Arabe', function () {
    assertContentPack(3, 'Bouquet Arabe');
  });

  it('Bouquet Africain', function () {
    assertContentPack(2, 'Bouquet Africain');
  });

  it('Be tv Sport', function () {
    assertContentPack(1, 'Be tv Sport');
  });

  function assertContentPack(idx: number, expected: string) {
    if (!optionsList['dtv']['DITV0000']['contentPack']) {
      fail();
    }
    expect(optionsList['dtv']['DITV0000']['contentPack'][idx]['label']).toEqual(expected);
  }
});
