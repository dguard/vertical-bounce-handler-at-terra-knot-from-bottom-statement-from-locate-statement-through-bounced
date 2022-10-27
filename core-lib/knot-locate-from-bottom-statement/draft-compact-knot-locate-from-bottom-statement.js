
// keep !

(function() {
    let passThrough = {}
    // keep

    const Pencil = window['@pencil/draft-compact-knot-locate-from-bottom-statement']['Pencil']
    const DraftFabrikk = window['@pencil/draft-compact-knot-locate-from-bottom-statement']['DraftFabrikk']

    // keep !
    let passThroughFromBottom = {}
    passThroughFromBottom['@pencil/draft-knot-locate-from-bottom-statement'] = {}
    // keep

    passThrough['@pencil/draft-knot-locate-from-bottom-statement'] = function (spawnedPointerBelongings, passThroughKnot) {

let canvas = document.querySelector('.statement-area').querySelector('.statement-at-front').querySelector('#scene')

let ctx = canvas.getContext('2d')

// keep !

let pencil = new Pencil()

// keep \ de \siestar
let dcsTar = pencil.passThroughCrowd().joinLoop().compact()
let knotFromBottomStatementThroughCS = new KnotFromBottomStatement(dcsTar)

let bottomStatement = draftFabrikk.constructBottomStatement()
let sceneWalkingAroundLabirintAtStart = new SceneWalkingAroundLabirintAtStart()

// through bind
pencil.rememberSample(sceneWalkingAroundLabirintAtStart, new TerraKnotFromBottomStatement())
pencil.useScene(sceneWalkingAroundLabirintAtStart)

pencil.rememberSample(sceneWalkingAroundLabirintAtStart, knotFromBottomStatementThroughCS)
pencil.useScene(sceneWalkingAroundLabirintAtStart)

let terraKnotFromBottomStatement = pencil.constructKnot()

draftFabrikk.connectKnotToBottomStatement(bottomStatement, terraKnotFromBottomStatement)
pencil.putKnotConnectedToBottomStatement(terraKnotFromBottomStatement)

pencil.rememberSample(sceneWalkingAroundLabirintAtStart, new KnotLocate())
pencil.useScene(sceneWalkingAroundLabirintAtStart)

let knotFromBottomStatement = pencil.constructKnot()

knotFromBottomStatement.useConnectedKnot(terraKnotFromBottomStatement)

// spawnPointerBelongingsAtRectangle
// knotFromBottomStatement.highlightPointerBelongings(/* keep */)

// keep up !
draftFabrikk.connectKnotToBottomStatement(bottomStatement, knotFromBottomStatement)
pencil.putKnotConnectedToBottomStatement(knotFromBottomStatement)

let knotLocate = pencil.constructKnot()

// keep
pencil.rememberSample(sceneWalkingAroundLabirintAtStart, new KnotLocateStickedFromBottomStatement())
pencil.useScene(sceneWalkingAroundLabirintAtStart)

// keep !

let knotLocateStickedFromBottomStatement = pencil.constructKnot()

// keep

draftFabrikk.connectKnotToBottomStatement(bottomStatement, knotLocateStickedFromBottomStatement)
pencil.putKnotConnectedToBottomStatement(knotLocateStickedFromBottomStatement)

// keep !

// de \ siestar ! they are using anti-patterns
let pointerBelongingsCollectionOfFour = pencil.drawThrough(knotLocateStickedFromBottomStatement).intoPointerBelongingsCollection()
knotLocate.constructPointerBelongings(pointerBelongingsCollectionOfFour)

knotLocate.assignKnotToKnotFromBottomStatement(knotFromBottomStatement)

// keep up !
draftFabrikk.connectKnotToBottomStatement(bottomStatement, knotLocate)
pencil.putKnotConnectedToBottomStatement(knotLocate)


// keep !

pencil.useKnot(terraKnotFromBottomStatement)
pencil.draw()


let echoLocatorAtKnotLocate = new EchoLocatorAtKnotLocate()
// use relative size
// use pointer belongings
pencil.useKnot(knotLocate)
pencil.useEchoLocator(echoLocatorAtKnotLocate)

pencil.useViewport(/* keep */)

pencil.draw()
}

// keep
window['@pencil/draft-knot-locate-from-bottom-statement'] = {
    passThrough: passThrough['@pencil/draft-knot-locate-from-bottom-statement'],
    passThroughFromBottom: passThroughFromBottom['@pencil/draft-knot-locate-from-bottom-statement']
}
// keep


}
// keep !