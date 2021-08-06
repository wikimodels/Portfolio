import { AppMaterialModule } from './../material.module';
import { MatAccordionHarness } from '@angular/material/expansion/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatButtonHarness } from '@angular/material/button/testing';
import { HomeComponent } from './home.component';
import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { HarnessLoader } from '@angular/cdk/testing';

let loader: HarnessLoader;
let fixture: any;
let component: HomeComponent;
describe('home component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMaterialModule, AppModule],
      declarations: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  // it('should work', async () => {
  //   const buttons = await loader.getAllHarnesses(MatButtonHarness); // length: 3
  //   const firstButton = await loader.getHarness<MatButtonHarness>(
  //     MatButtonHarness
  //   ); // === buttons[0]
  //   await firstButton.click();
  //   expect(fixture.componentInstance.hidden).toBe(true);
  //   await firstButton.click();
  //   console.log(fixture);
  //   expect(fixture.componentInstance.hidden).toBe(false);
  // });

  // it('panel title equals Welcome', async () => {
  //   const panelsHarness = await loader.getHarness<MatAccordionHarness>(
  //     MatAccordionHarness
  //   );
  //   const panel = await panelsHarness.getExpansionPanels();
  //   const title = await panel[0].getTitle();
  //   console.log(title);
  //   expect(title).toEqual('Welcome');
  // });

  // it('panel title equals I am the content!', async () => {
  //   const panelsHarness = await loader.getHarness<MatAccordionHarness>(
  //     MatAccordionHarness
  //   );
  //   const panel = await panelsHarness.getExpansionPanels();
  //   const content = await panel[0].getTextContent();
  //   console.log(content);
  //   await fixture.componentInstance.fuckIt();
  //   expect(fixture.componentInstance.hidden).toEqual(true);
  //   await fixture.componentInstance.fuckIt();
  //   expect(fixture.componentInstance.hidden).toEqual(false);
  //   expect(content).toEqual('I am the content!');
  // });
});

// changeDetectorRef: RootViewRef {_lView: LRootView(31), _cdRefInjectingView: undefined, _appRef: null, _viewContainerRef: null, _view: LRootView(31)}
// componentInstance: HomeComponent {hidden: false, __ngContext__: LRootView(31)}
// componentRef: ComponentRef$1 {location: ElementRef, _rootLView: LRootView(31), _tNode: TNode, destroyCbs: null, instance: HomeComponent, …}
// debugElement: DebugElement__POST_R3__ {nativeNode: div#root0}
// elementRef: ElementRef {nativeElement: div#root0}
// nativeElement: div#root0
