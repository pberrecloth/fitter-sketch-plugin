var onRun = function(context) {
    var doc = context.document
    var selection = context.selection

    if (selection.count() == 0) {
        doc.showMessage("Please select a layer.")
        return

    } else if (selection.count() == 1) {
        var layer = selection[0]
        var artboard = doc.currentPage().currentArtboard() || doc.currentPage()

        layer.frame().setX(0)
        layer.frame().setY(0)
        layer.frame().setWidth(artboard.frame().width())
        layer.frame().setHeight(artboard.frame().height())

        doc.currentPage().deselectAllLayers()
        layer.select_byExpandingSelection(true, true)

    } else if (selection.count() > 1) {
        doc.showMessage("Please select one layer.")
        return
    }
};
