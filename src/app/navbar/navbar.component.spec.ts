import { AppMaterialModule } from './../material.module';

import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatButtonHarness } from '@angular/material/button/testing';
import {
  MatMenuHarness,
  MatMenuItemHarness,
} from '@angular/material/menu/testing';

import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { HarnessLoader } from '@angular/cdk/testing';
import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';

let loader: HarnessLoader;
let fixture: any;
let component: NavbarComponent;
describe('NAVBAR Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMaterialModule, AppModule],
      declarations: [NavbarComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('menu is open when menu-button clicked', async () => {
    const menuButton = await loader.getHarness(
      MatButtonHarness.with({ selector: '.menu-button' })
    );
    const menu = await loader.getHarness<MatMenuHarness>(MatMenuHarness);
    await menuButton.click();
    expect(await menu.isOpen()).toBeTrue();
  });

  xit('menu is closed when menu-button clicked', async () => {
    const menuButton = await loader.getHarness(
      MatButtonHarness.with({ selector: '.menu-button' })
    );
    const menu = await loader.getHarness<MatMenuHarness>(MatMenuHarness);
    await menu.open();
    //console.log('menu open', await menu.isOpen());
    const menuItems: MatMenuItemHarness[] = await menu.getItems();
    console.log('menu items', await menuItems[0].getText());
    console.log('menu items host', await menuItems[0].host());
    console.log('menu open', await menu.isOpen());
    await menuButton.click();
    expect(await menu.isOpen()).toBeFalse();
  });

  it('menu has more_vert text', async () => {
    const menu = await loader.getHarness<MatMenuHarness>(MatMenuHarness);
    expect(await menu.getTriggerText()).toEqual('more_vert');
  });

  it('goToCalendar() is called when "Calendar" menu-button is clicked', async () => {
    spyOn(component, 'goToCalendar');
    const menu = await loader.getHarness<MatMenuHarness>(MatMenuHarness);
    await menu.open();
    const menuItems: MatMenuItemHarness[] = await menu.getItems();
    await menuItems[0].click();
    expect(component.goToCalendar).toHaveBeenCalled();
  });

  it('goHome() is called when navbar-logo is clicked', async () => {
    spyOn(component, 'goHome');
    const logo = fixture.debugElement.query(By.css('#logo'));
    logo.nativeElement.click();
    expect(component.goHome).toHaveBeenCalled();
  });
});

// changeDetectorRef: RootViewRef {_lView: LRootView(31), _cdRefInjectingView: undefined, _appRef: null, _viewContainerRef: null, _view: LRootView(31)}
// componentInstance: HomeComponent {hidden: false, __ngContext__: LRootView(31)}
// componentRef: ComponentRef$1 {location: ElementRef, _rootLView: LRootView(31), _tNode: TNode, destroyCbs: null, instance: HomeComponent, …}
// debugElement: DebugElement__POST_R3__ {nativeNode: div#root0}
// elementRef: ElementRef {nativeElement: div#root0}
// nativeElement: div#root0
