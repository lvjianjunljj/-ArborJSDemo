//
// halfviz.js
//
// instantiates all the helper classes, sets up the particle system + renderer
// and maintains the canvas/editor splitview
//
(function () {

  trace = arbor.etc.trace
  objmerge = arbor.etc.objmerge
  objcopy = arbor.etc.objcopy

  var HalfViz = function (elt) {
    var dom = $(elt)

    sys = arbor.ParticleSystem(2600, 512, 0.5)
    sys.renderer = Renderer("#viewport", dom.find('textarea')) // our newly created renderer will have its .init() method called shortly by sys...
    sys.screenPadding(20)

    var _ed = dom.find('#editor')
    var _code = dom.find('textarea')
    var _canvas = dom.find('#viewport').get(0)
    var _grabber = dom.find('#grabber')

    var _updateTimeout = null
    var _editing = false // whether to undim the Save menu and prevent navigating away

    var that = {
      dashboard: Dashboard("#dashboard", sys),
      io: IO("#editor .io"),
      init: function () {

        $(window).resize(that.resize)
        that.resize()
        that.updateLayout(Math.max(1, $(window).width() - 340))

        _code.keydown(that.typing)
        _grabber.bind('mousedown', that.grabbed)

        return that
      },

      resize: function () {
        var w = $(window).width() - 40
        var x = w - _ed.width()
        that.updateLayout(x)
        sys.renderer.redraw()
      },

      updateLayout: function (split) {
        var w = dom.width()
        var h = _grabber.height()
        var split = split || _grabber.offset().left
        var splitW = _grabber.width()
        _grabber.css('left', split)

        var edW = w - split
        var edH = h
        _ed.css({ width: edW, height: edH })
        if (split > w - 20) _ed.hide()
        else _ed.show()

        var canvW = split - splitW
        var canvH = h
        _canvas.width = canvW
        _canvas.height = canvH
        sys.screenSize(canvW, canvH)

        _code.css({ height: h - 20, width: edW - 4, marginLeft: 2 })
      },

      grabbed: function (e) {
        $(window).bind('mousemove', that.dragged)
        $(window).bind('mouseup', that.released)
        return false
      },
      dragged: function (e) {
        var w = dom.width()
        that.updateLayout(Math.max(10, Math.min(e.pageX - 10, w)))
        sys.renderer.redraw()
        return false
      },
      released: function (e) {
        $(window).unbind('mousemove', that.dragged)
        return false
      },
      typing: function (e) {
        var c = e.keyCode
        if ($.inArray(c, [37, 38, 39, 40, 16]) >= 0) {
          return
        }

        if (!_editing) {
          $.address.value("")
        }
        _editing = true

        if (_updateTimeout) clearTimeout(_updateTimeout)
        _updateTimeout = setTimeout(that.updateGraph, 900)
      }
    }

    return that.init()
  }


  $(document).ready(function () {
    var mcp = HalfViz("#halfviz")
  })


})()