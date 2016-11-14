function fitWidthToArtboard(context) {
    var doc = context.document
    var selection = context.selection

    if (selection.count() == 0) {
        doc.showMessage("Please select a layer.")
        return

    } else if (selection.count() == 1) {
        var layer = selection[0]
        var artboard = doc.currentPage().currentArtboard() || doc.currentPage()

        layer.frame().setX(0)
        // layer.frame().setY(0)
        layer.frame().setWidth(artboard.frame().width())
        // layer.frame().setHeight(artboard.frame().height())

        doc.currentPage().deselectAllLayers()
        layer.select_byExpandingSelection(true, true)

    } else if (selection.count() > 1) {
        doc.showMessage("Please select one layer.")
        return
    }
};
function fitToArtboardMargins(context) {
    var doc = context.document
    var selection = context.selection

    if (selection.count() == 0) {
        doc.showMessage("Please select a layer.")
        return

    } else if (selection.count() == 1) {
        var layer = selection[0]
        var artboard = doc.currentPage().currentArtboard() || doc.currentPage()

        var margin = [[doc askForUserInput:"Margin" ofType:1 initialValue:"16"] integerValue];

        var newX = 0 + margin
        var newWidth = artboard.frame().width() - margin*2


        layer.frame().setX(newX)
        // layer.frame().setY(0)
        layer.frame().setWidth(newWidth)
        // layer.frame().setHeight(artboard.frame().height())

        doc.currentPage().deselectAllLayers()
        layer.select_byExpandingSelection(true, true)

    } else if (selection.count() > 1) {
        doc.showMessage("Please select one layer.")
        return
    }
};
function fitHeightToArtboard(context) {
    var doc = context.document
    var selection = context.selection

    if (selection.count() == 0) {
        doc.showMessage("Please select a layer.")
        return

    } else if (selection.count() == 1) {
        var layer = selection[0]
        var artboard = doc.currentPage().currentArtboard() || doc.currentPage()

        // layer.frame().setX(0)
        layer.frame().setY(0)
        // layer.frame().setWidth(artboard.frame().width())
        layer.frame().setHeight(artboard.frame().height())

        doc.currentPage().deselectAllLayers()
        layer.select_byExpandingSelection(true, true)

    } else if (selection.count() > 1) {
        doc.showMessage("Please select one layer.")
        return
    }
};
function fitToArtboard(context) {
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
