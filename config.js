import * as cssModules from './lib/css-modules/index.js';

const propertiesOrder = {
  //--- ALL ---//
  all: ['all'],

  //--- USER INTERFACE ---//

  //--- GENERATED CONTENT ---//

  //--- POSITION ---//

  //--- LAYOUT ---//

  //--- BOX MODEL ---//

  //--- APPEARANCE ---//

  //--- TYPOGRAPHY ---//

  //--- SVG ---//

  //--- MOTION ---//

  //--- USER INTERFACE ---//
  colorAdjustmentModule_Scheme: cssModules.colorAdjustmentModule.scheme,
  colorAdjustmentModule_Adjust: cssModules.colorAdjustmentModule.adjust,

  userInterfaceModule_Events: cssModules.userInterfaceModule.events,
  userInterfaceModule_Theme: cssModules.userInterfaceModule.theme,
  userInterfaceModule_Platform: cssModules.userInterfaceModule.platform,
  userInterfaceModule_Caret: cssModules.userInterfaceModule.caret,
  userInterfaceModule_Cursor: cssModules.userInterfaceModule.cursor,
  userInterfaceModule_Sizing: cssModules.userInterfaceModule.sizing,
  userInterfaceModule_Security: cssModules.userInterfaceModule.security,
  userInterfaceModule_Nav: cssModules.userInterfaceModule.nav,
  userInterfaceModule_User: cssModules.userInterfaceModule.user,
  //--- GENERATED ---//
  generatedContentModule: cssModules.generatedContentModule,
  //--- SCROLL ---//
  scrollAnchoringModule: cssModules.scrollAnchoringModule,
  overflowModule_Scroll: cssModules.overflowModule.scroll,
  overflowModule_Scrollbar: cssModules.overflowModule.scrollbar,
  scrollbarsStylingModule: cssModules.scrollbarsStyling,
  scrollSnapModule_Targets: cssModules.scrollSnapModule.targets,
  scrollSnapModule_Margins: cssModules.scrollSnapModule.margins,
  scrollSnapModule_Paddings: cssModules.scrollSnapModule.paddings,
  scrollSnapModule_Snaps: cssModules.scrollSnapModule.snaps,
  //--- SPEECH ---//
  speechModule_Cue: cssModules.speechModule.cue,
  speechModule_Pause: cssModules.speechModule.pause,
  speechModule_Rest: cssModules.speechModule.rest,
  speechModule_Speak: cssModules.speechModule.speak,
  speechModule_Voice: cssModules.speechModule.voice,
  //--- POSITION ---//
  compositingAndBlendingModule_Isolation: cssModules.compositingAndBlendingModule.isolation,
  anchorPositioningModule_Anchors: cssModules.anchorPositioningModule.anchors,
  anchorPositioningModule_Positions: cssModules.anchorPositioningModule.positions,
  positionedLayoutModule: cssModules.positionedLayoutModule,
  transformsModule_Matrix: cssModules.transformsModule.matrix,
  viewportModule: cssModules.viewportModule,
  //--- LAYOUT ---//
  conditionalRulesModule: cssModules.conditionalRulesModule,
  pageFloatsModule: cssModules.pageFloatsModule,
  containmentModule: cssModules.containmentModule,
  displayModule: cssModules.displayModule,
  tableModule_Layouts: cssModules.tableModule.layouts,
  tableModule_Borders: cssModules.tableModule.borders,
  tableModule_Captions: cssModules.tableModule.captions,
  tableModule_Cells: cssModules.tableModule.cells,
  multiColumnLayoutModule: cssModules.multiColumnLayoutModule,
  fragmentationModule_Fragments: cssModules.fragmentationModule.fragments,
  fragmentationModule_Breaks: cssModules.fragmentationModule.breaks,
  gridLayoutModule_Grids: cssModules.gridLayoutModule.grids,
  gridLayoutModule_Masonry: cssModules.gridLayoutModule.masonry,
  flexibleBoxLayoutModule: cssModules.flexibleBoxLayoutModule,
  boxAlignmentModule_Align: cssModules.boxAlignmentModule.align,
  boxAlignmentModule_Justify: cssModules.boxAlignmentModule.justify,
  boxAlignmentModule_Place: cssModules.boxAlignmentModule.place,
  boxAlignmentModule_Gap: cssModules.boxAlignmentModule.gap,
  lineGridModule: cssModules.lineGridModule,
  overflowModule_Overflow: cssModules.overflowModule.overflow,
  overflowModule_Line: cssModules.overflowModule.line,
  overflowModule_Text: cssModules.overflowModule.text,
  overscrollBehaviorModule: cssModules.overscrollBehaviorModule,
  pagedMediaModule: cssModules.pagedMediaModule,
  shapesModule: cssModules.shapesModule,
  exclusionsModule: cssModules.exclusionsModule,
  //--- BOX MODEL ---//
  boxSizingModule_Sizing: cssModules.boxSizingModule.sizing,
  boxSizingModule_Intrinsic: cssModules.boxSizingModule.intrinsic,
  boxSizingModule_Height: cssModules.boxSizingModule.height,
  logicalPropertiesModule_Blocks: cssModules.logicalPropertiesModule.blocks,
  boxSizingModule_Width: cssModules.boxSizingModule.width,
  logicalPropertiesModule_Inlines: cssModules.logicalPropertiesModule.inlines,
  boxModelModule_Margins: cssModules.boxModelModule.margins,
  logicalPropertiesModule_Margins: cssModules.logicalPropertiesModule.margins,
  boxModelModule_Paddings: cssModules.boxModelModule.paddings,
  logicalPropertiesModule_Paddings: cssModules.logicalPropertiesModule.paddings,
  rhythmicSizingModule: cssModules.rhythmicSizingModule,
  //--- APPEARANCE ---//
  transformsModule_Perspective: cssModules.transformsModule.perspective,
  transformsModule_Visibility: cssModules.transformsModule.visibility,
  imagesModule_Objects: cssModules.imagesModule.objects,
  imagesModule_Images: cssModules.imagesModule.images,
  backgroundsModule: cssModules.backgrounds,
  bordersModule_Borders: cssModules.bordersModule.borders,
  bordersModule_Clips: cssModules.bordersModule.clips,
  bordersModule_Corners: cssModules.bordersModule.corners,
  bordersModule_Radius: cssModules.bordersModule.radius,
  bordersModule_Images: cssModules.bordersModule.images,
  bordersModule_Shadows: cssModules.bordersModule.shadows,
  userInterfaceModule_Outline: cssModules.userInterfaceModule.outline,
  colorModule_Opacity: cssModules.colorModule.opacity,
  colorModule_Color: cssModules.colorModule.color,
  compositingAndBlendingModule_Blends: cssModules.compositingAndBlendingModule.blends,
  filterEffectsModule_Filters: cssModules.filterEffectsModule.filters,
  filterEffectsModule_Floods: cssModules.filterEffectsModule.floods,
  filterEffectsModule_Lights: cssModules.filterEffectsModule.lights,
  listsAndCountersModule_Lists: cssModules.listsAndCountersModule.lists,
  listsAndCountersModule_Counters: cssModules.listsAndCountersModule.counters,
  //--- TYPOGRAPHY ---//
  fontsModule_Fonts: cssModules.fontsModule.fonts,
  textModule_Punctuations: cssModules.textModule.punctuations,
  textModule_Letters: cssModules.textModule.letters,
  textModule_Lines: cssModules.textModule.lines,
  rubyLayoutModule: cssModules.rubyLayoutModule,
  textModule_Text: cssModules.textModule.text,
  textDecorationModule_Decorations: cssModules.textDecorationModule.decoration,
  textDecorationModule_Emphasis: cssModules.textDecorationModule.emphasis,
  textDecorationModule_Shadow: cssModules.textDecorationModule.shadow,
  textDecorationModule_Underline: cssModules.textDecorationModule.underline,
  writingModesModule_Text: cssModules.writingModesModule.text,
  mobileTextSizeAdjustmentModule: cssModules.mobileTextSizeAdjustmentModule,
  textModule_Tabs: cssModules.textModule.tabs,
  inlineLayoutModule_Align: cssModules.inlineLayoutModule.aligns,
  textModule_Whitespaces: cssModules.textModule.whitespaces,
  textModule_Words: cssModules.textModule.words,
  textModule_Wraps: cssModules.textModule.wraps,
  fontsModule_FontFaces: cssModules.fontsModule.fontFaces,
  fontsModule_Overrides: cssModules.fontsModule.overrides,
  inlineLayoutModule_Baselines: cssModules.inlineLayoutModule.baselines,
  inlineLayoutModule_Letters: cssModules.inlineLayoutModule.letters,
  inlineLayoutModule_Inlines: cssModules.inlineLayoutModule.inlines,
  inlineLayoutModule_Lines: cssModules.inlineLayoutModule.lines,
  inlineLayoutModule_Text: cssModules.inlineLayoutModule.text,
  writingModesModule_Modes: cssModules.writingModesModule.modes,
  writingModesModule_Directions: cssModules.writingModesModule.directions,
  writingModesModule_Unicode: cssModules.writingModesModule.unicode,
  //--- SVG ---//
  svgModule_Text: cssModules.svgModule.text,
  svgModule_Position: cssModules.svgModule.position,
  svgModule_Fill: cssModules.svgModule.fill,
  svgModule_Color: cssModules.svgModule.color,
  svgModule_Render: cssModules.svgModule.render,
  svgModule_Marker: cssModules.svgModule.marker,
  svgModule_Stroke: cssModules.svgModule.stroke,
  maskingModule_Masks: cssModules.maskingModule.masks,
  maskingModule_Clips: cssModules.maskingModule.clips,
  //--- ANIMATIONS ---//
  animationsModule: cssModules.animationsModule,
  scrollDrivenAnimationsModule_Animations: cssModules.scrollDrivenAnimationsModule.animations,
  scrollDrivenAnimationsModule_Scrolls: cssModules.scrollDrivenAnimationsModule.scrolls,
  scrollDrivenAnimationsModule_Scopes: cssModules.scrollDrivenAnimationsModule.scopes,
  scrollDrivenAnimationsModule_Views: cssModules.scrollDrivenAnimationsModule.views,
  motionPathModule: cssModules.motionPathModule,
  transitionsModule: cssModules.transitionsModule,
  viewTransitionModule: cssModules.viewTransitionModule,
  willChangeModule: cssModules.willChangeModule,
};

// console.log(JSON.stringify(propertiesOrder));

function setStylelintOrder() {
  const orderGroups = [];

  for (const [key, value] of Object.entries(propertiesOrder)) {
    const group = { groupName: key, properties: value };
    orderGroups.push(group);
  }

  return {
    plugins: ['stylelint-order'],
    rules: {
      'order/properties-order': [orderGroups],
    },
  };
}

export default setStylelintOrder();
