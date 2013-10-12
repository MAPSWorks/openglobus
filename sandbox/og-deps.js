// This file was autogenerated by D:\my projects\closure-library\closure\bin\build\depswriter.py.
// Please do not edit.
goog.addDependency('../../../openglobus/src/og/ajax.js', ['og.Ajax'], []);
goog.addDependency('../../../openglobus/src/og/bv/box.js', ['og.bv.Box'], ['og.math.Vector3']);
goog.addDependency('../../../openglobus/src/og/bv/sphere.js', ['og.bv.Sphere'], ['og.math.Vector3']);
goog.addDependency('../../../openglobus/src/og/camera.js', ['og.Camera'], ['og.Frustum', 'og.math.Matrix4', 'og.math.Vector3']);
goog.addDependency('../../../openglobus/src/og/class.js', ['og._class_'], []);
goog.addDependency('../../../openglobus/src/og/control/control.js', ['og.control.Control'], []);
goog.addDependency('../../../openglobus/src/og/control/keyboardNavigation.js', ['og.control.KeyboardNavigation'], ['og._class_', 'og.control.Control', 'og.input']);
goog.addDependency('../../../openglobus/src/og/control/layerSwitcher.js', ['og.control.LayerSwitcher'], ['og._class_']);
goog.addDependency('../../../openglobus/src/og/control/mouseNavigation.js', ['og.control.MouseNavigation'], ['og._class_', 'og.control.Control', 'og.math', 'og.math.Matrix4', 'og.math.Vector3']);
goog.addDependency('../../../openglobus/src/og/control/mousePosition.js', ['og.control.MousePosition'], ['og._class_', 'og.control.Control', 'og.planetSegment']);
goog.addDependency('../../../openglobus/src/og/control/showFps.js', ['og.control.ShowFps'], ['og._class_', 'og.control.Control']);
goog.addDependency('../../../openglobus/src/og/control/toggleWireframe.js', ['og.control.ToggleWireframe'], ['og._class_', 'og.input', 'og.webgl']);
goog.addDependency('../../../openglobus/src/og/ellipsoid/ellipsoid.js', ['og.Ellipsoid'], ['og.math']);
goog.addDependency('../../../openglobus/src/og/ellipsoid/wgs84ellipsoid.js', ['og.ellipsoid.wgs84'], ['og.Ellipsoid']);
goog.addDependency('../../../openglobus/src/og/extent/extent.js', ['og.extent', 'og.extent.Extent'], []);
goog.addDependency('../../../openglobus/src/og/frustum.js', ['og.Frustum'], []);
goog.addDependency('../../../openglobus/src/og/input/input.js', ['og.input', 'og.input.Input'], []);
goog.addDependency('../../../openglobus/src/og/layer/layer.js', ['og.layer', 'og.layer.Layer'], []);
goog.addDependency('../../../openglobus/src/og/layer/wms.js', ['og.layer.WMS'], ['og._class_', 'og.layer.XYZ']);
goog.addDependency('../../../openglobus/src/og/layer/xyz.js', ['og.layer.XYZ'], ['og._class_', 'og.layer.Layer', 'og.quadTree']);
goog.addDependency('../../../openglobus/src/og/math/math.js', ['og.math'], []);
goog.addDependency('../../../openglobus/src/og/math/matrix4.js', ['og.math.Matrix4'], ['og.math', 'og.math.Vector3', 'og.math.Vector4']);
goog.addDependency('../../../openglobus/src/og/math/vector3.js', ['og.math.Vector3'], []);
goog.addDependency('../../../openglobus/src/og/math/vector4.js', ['og.math.Vector4'], ['og.math.Vector3']);
goog.addDependency('../../../openglobus/src/og/node/node.js', ['og.node.Node'], []);
goog.addDependency('../../../openglobus/src/og/node/node3D.js', ['og.node.Node3D'], ['og._class_', 'og.node.Node', 'og.webgl']);
goog.addDependency('../../../openglobus/src/og/node/planet.js', ['og.node.Planet'], ['og._class_', 'og.bv.Sphere', 'og.math.Matrix4', 'og.math.Vector3', 'og.node.Node3D', 'og.quadTree', 'og.quadTree.QuadNode', 'og.webgl']);
goog.addDependency('../../../openglobus/src/og/og.js', ['og'], []);
goog.addDependency('../../../openglobus/src/og/planetSegment/planetSegment.js', ['og.planetSegment', 'og.planetSegment.PlanetSegment'], ['og.bv.Box', 'og.bv.Sphere', 'og.extent', 'og.layer', 'og.math', 'og.math.Vector3', 'og.planetSegment.PlanetSegmentHelper']);
goog.addDependency('../../../openglobus/src/og/planetSegment/planetSegmentHelper.js', ['og.planetSegment.PlanetSegmentHelper'], ['og.quadTree']);
goog.addDependency('../../../openglobus/src/og/quadTree/quadNode.js', ['og.quadTree.QuadNode'], ['og.extent', 'og.planetSegment.PlanetSegment', 'og.quadTree']);
goog.addDependency('../../../openglobus/src/og/quadTree/quadTree.js', ['og.quadTree'], []);
goog.addDependency('../../../openglobus/src/og/renderer.js', ['og.Renderer'], ['og.Camera', 'og.input', 'og.input.Input', 'og.math.Vector3']);
goog.addDependency('../../../openglobus/src/og/terrainProvider/terrainProvider.js', ['og.terrainProvider', 'og.terrainProvider.TerrainProvider'], ['og.Ajax', 'og.layer', 'og.planetSegment.PlanetSegmentHelper', 'og.quadTree']);
goog.addDependency('../../../openglobus/src/og/webgl/handler.js', ['og.webgl.Handler'], ['og.math', 'og.webgl']);
goog.addDependency('../../../openglobus/src/og/webgl/webgl.js', ['og.webgl'], []);
