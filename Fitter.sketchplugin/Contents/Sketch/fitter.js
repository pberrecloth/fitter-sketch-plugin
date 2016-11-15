
// COMMANDS
function fitToArtboard(context) {
  fitterProcessor(context, 0, 1, 1)
};
function fitToArtboardWidth(context) {
  fitterProcessor(context, 0, 1, null)
};
function fitToArtboardHeight(context) {
  fitterProcessor(context, 0, null, 1)
};
function fitToArtboardMargin(context) {
  var doc = context.document
  var margin = [[doc askForUserInput:"Margin" ofType:1 initialValue:"16"] integerValue];
  fitterProcessor(context, margin, 1, 1)
}
function fitToArtboardWidthMargin(context) {
  var doc = context.document
  var margin = [[doc askForUserInput:"Margin" ofType:1 initialValue:"16"] integerValue];
  fitterProcessor(context, margin, 1, null)
}
function fitToArtboardHeightMargin(context) {
  var doc = context.document
  var margin = [[doc askForUserInput:"Margin" ofType:1 initialValue:"16"] integerValue];
  fitterProcessor(context, margin, null, 1)
}


// PROCESSOR
function fitterProcessor(context, margin, fitHorizontally, fitVertically) {
  var doc = context.document
  var selection = context.selection
  var selectionCount = selection.count()

  if (selectionCount == 0) {
    doc.showMessage("Please select a layer.")
    return

  } else if (selectionCount >= 1) {

    for (i=0;i<=selectionCount;i++){
      var layer = selection[i]

      if ([layer class] != "MSArtboardGroup") {

        var layerParentGroup = [layer parentGroup];

        // Ensures the layer scales to the parent artboard
        while (layerParentGroup){
          if ([layerParentGroup class] == "MSArtboardGroup"){
            artboardToSelect = layerParentGroup;
            break;
          }
          // If layer is nested in any groups we must reset the position of the parent because child position is relative
          if ([layerParentGroup class] == "MSLayerGroup"){
            if (fitVertically){ var layerGroupY = layerParentGroup.frame().setY(0) }
            if (fitHorizontally){ var layerGroupX = layerParentGroup.frame().setX(0) }
          }
          layerParentGroup = [layerParentGroup parentGroup];
        }
        var artboard = layerParentGroup

        if (fitHorizontally){
          var newX = margin
          var newWidth = artboard.frame().width() - margin*2
          layer.frame().setX(newX)
          layer.frame().setWidth(newWidth)
        }

        if (fitVertically){
          var newY = margin
          var newHeight = artboard.frame().height() - margin*2
          layer.frame().setY(newY)
          layer.frame().setHeight(newHeight)
        }
      }

    }

  }
};
