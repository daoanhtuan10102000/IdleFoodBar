var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i292 = root || request.c( 'UnityEngine.JointSpring' )
  var i293 = data
  i292.spring = i293[0]
  i292.damper = i293[1]
  i292.targetPosition = i293[2]
  return i292
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i294 = root || request.c( 'UnityEngine.JointMotor' )
  var i295 = data
  i294.m_TargetVelocity = i295[0]
  i294.m_Force = i295[1]
  i294.m_FreeSpin = i295[2]
  return i294
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i296 = root || request.c( 'UnityEngine.JointLimits' )
  var i297 = data
  i296.m_Min = i297[0]
  i296.m_Max = i297[1]
  i296.m_Bounciness = i297[2]
  i296.m_BounceMinVelocity = i297[3]
  i296.m_ContactDistance = i297[4]
  i296.minBounce = i297[5]
  i296.maxBounce = i297[6]
  return i296
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i298 = root || request.c( 'UnityEngine.JointDrive' )
  var i299 = data
  i298.m_PositionSpring = i299[0]
  i298.m_PositionDamper = i299[1]
  i298.m_MaximumForce = i299[2]
  return i298
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i300 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i301 = data
  i300.m_Spring = i301[0]
  i300.m_Damper = i301[1]
  return i300
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i302 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i303 = data
  i302.m_Limit = i303[0]
  i302.m_Bounciness = i303[1]
  i302.m_ContactDistance = i303[2]
  return i302
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i304 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i305 = data
  i304.m_ExtremumSlip = i305[0]
  i304.m_ExtremumValue = i305[1]
  i304.m_AsymptoteSlip = i305[2]
  i304.m_AsymptoteValue = i305[3]
  i304.m_Stiffness = i305[4]
  return i304
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i306 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i307 = data
  i306.m_LowerAngle = i307[0]
  i306.m_UpperAngle = i307[1]
  return i306
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i308 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i309 = data
  i308.m_MotorSpeed = i309[0]
  i308.m_MaximumMotorTorque = i309[1]
  return i308
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i310 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i311 = data
  i310.m_DampingRatio = i311[0]
  i310.m_Frequency = i311[1]
  i310.m_Angle = i311[2]
  return i310
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i312 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i313 = data
  i312.m_LowerTranslation = i313[0]
  i312.m_UpperTranslation = i313[1]
  return i312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i314 = root || new pc.UnityMaterial()
  var i315 = data
  i314.name = i315[0]
  request.r(i315[1], i315[2], 0, i314, 'shader')
  i314.renderQueue = i315[3]
  i314.enableInstancing = !!i315[4]
  var i317 = i315[5]
  var i316 = []
  for(var i = 0; i < i317.length; i += 1) {
    i316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i317[i + 0]) );
  }
  i314.floatParameters = i316
  var i319 = i315[6]
  var i318 = []
  for(var i = 0; i < i319.length; i += 1) {
    i318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i319[i + 0]) );
  }
  i314.colorParameters = i318
  var i321 = i315[7]
  var i320 = []
  for(var i = 0; i < i321.length; i += 1) {
    i320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i321[i + 0]) );
  }
  i314.vectorParameters = i320
  var i323 = i315[8]
  var i322 = []
  for(var i = 0; i < i323.length; i += 1) {
    i322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i323[i + 0]) );
  }
  i314.textureParameters = i322
  var i325 = i315[9]
  var i324 = []
  for(var i = 0; i < i325.length; i += 1) {
    i324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i325[i + 0]) );
  }
  i314.materialFlags = i324
  return i314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i329 = data
  i328.name = i329[0]
  i328.value = i329[1]
  return i328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i333 = data
  i332.name = i333[0]
  i332.value = new pc.Color(i333[1], i333[2], i333[3], i333[4])
  return i332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i337 = data
  i336.name = i337[0]
  i336.value = new pc.Vec4( i337[1], i337[2], i337[3], i337[4] )
  return i336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i341 = data
  i340.name = i341[0]
  request.r(i341[1], i341[2], 0, i340, 'value')
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i345 = data
  i344.name = i345[0]
  i344.enabled = !!i345[1]
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i347 = data
  i346.position = new pc.Vec3( i347[0], i347[1], i347[2] )
  i346.scale = new pc.Vec3( i347[3], i347[4], i347[5] )
  i346.rotation = new pc.Quat(i347[6], i347[7], i347[8], i347[9])
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i349 = data
  i348.enabled = !!i349[0]
  request.r(i349[1], i349[2], 0, i348, 'sharedMaterial')
  var i351 = i349[3]
  var i350 = []
  for(var i = 0; i < i351.length; i += 2) {
  request.r(i351[i + 0], i351[i + 1], 2, i350, '')
  }
  i348.sharedMaterials = i350
  i348.receiveShadows = !!i349[4]
  i348.shadowCastingMode = i349[5]
  i348.sortingLayerID = i349[6]
  i348.sortingOrder = i349[7]
  i348.lightmapIndex = i349[8]
  i348.lightmapSceneIndex = i349[9]
  i348.lightmapScaleOffset = new pc.Vec4( i349[10], i349[11], i349[12], i349[13] )
  i348.lightProbeUsage = i349[14]
  i348.reflectionProbeUsage = i349[15]
  i348.color = new pc.Color(i349[16], i349[17], i349[18], i349[19])
  request.r(i349[20], i349[21], 0, i348, 'sprite')
  i348.flipX = !!i349[22]
  i348.flipY = !!i349[23]
  i348.drawMode = i349[24]
  i348.size = new pc.Vec2( i349[25], i349[26] )
  i348.tileMode = i349[27]
  i348.adaptiveModeThreshold = i349[28]
  i348.maskInteraction = i349[29]
  i348.spriteSortPoint = i349[30]
  return i348
}

Deserializers["CustomerController"] = function (request, data, root) {
  var i354 = root || request.c( 'CustomerController' )
  var i355 = data
  i354.isOrdered = request.d('BehaviorDesigner.Runtime.SharedBool', i355[0], i354.isOrdered)
  i354.beenReceivedOrder = request.d('BehaviorDesigner.Runtime.SharedBool', i355[1], i354.beenReceivedOrder)
  i354.orderDone = request.d('BehaviorDesigner.Runtime.SharedBool', i355[2], i354.orderDone)
  request.r(i355[3], i355[4], 0, i354, 'behaviorTree')
  return i354
}

Deserializers["BehaviorDesigner.Runtime.SharedBool"] = function (request, data, root) {
  var i356 = root || request.c( 'BehaviorDesigner.Runtime.SharedBool' )
  var i357 = data
  i356.mValue = !!i357[0]
  i356.mIsShared = !!i357[1]
  i356.mIsGlobal = !!i357[2]
  i356.mIsDynamic = !!i357[3]
  i356.mName = i357[4]
  i356.mToolTip = i357[5]
  i356.mPropertyMapping = i357[6]
  request.r(i357[7], i357[8], 0, i356, 'mPropertyMappingOwner')
  return i356
}

Deserializers["BehaviorDesigner.Runtime.BehaviorTree"] = function (request, data, root) {
  var i358 = root || request.c( 'BehaviorDesigner.Runtime.BehaviorTree' )
  var i359 = data
  i358.gizmoViewMode = i359[0]
  i358.showBehaviorDesignerGizmo = !!i359[1]
  i358.startWhenEnabled = !!i359[2]
  i358.asynchronousLoad = !!i359[3]
  i358.pauseWhenDisabled = !!i359[4]
  i358.restartWhenComplete = !!i359[5]
  i358.logTaskChanges = !!i359[6]
  i358.group = i359[7]
  i358.resetValuesOnRestart = !!i359[8]
  request.r(i359[9], i359[10], 0, i358, 'externalBehavior')
  i358.mBehaviorSource = request.d('BehaviorDesigner.Runtime.BehaviorSource', i359[11], i358.mBehaviorSource)
  return i358
}

Deserializers["BehaviorDesigner.Runtime.BehaviorSource"] = function (request, data, root) {
  var i360 = root || request.c( 'BehaviorDesigner.Runtime.BehaviorSource' )
  var i361 = data
  i360.behaviorName = i361[0]
  i360.behaviorDescription = i361[1]
  i360.mTaskData = request.d('BehaviorDesigner.Runtime.TaskSerializationData', i361[2], i360.mTaskData)
  return i360
}

Deserializers["BehaviorDesigner.Runtime.TaskSerializationData"] = function (request, data, root) {
  var i362 = root || request.c( 'BehaviorDesigner.Runtime.TaskSerializationData' )
  var i363 = data
  var i365 = i363[0]
  var i364 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i365.length; i += 1) {
    i364.add(i365[i + 0]);
  }
  i362.types = i364
  var i367 = i363[1]
  var i366 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i367.length; i += 1) {
    i366.add(i367[i + 0]);
  }
  i362.parentIndex = i366
  var i369 = i363[2]
  var i368 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i369.length; i += 1) {
    i368.add(i369[i + 0]);
  }
  i362.startIndex = i368
  var i371 = i363[3]
  var i370 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i371.length; i += 1) {
    i370.add(i371[i + 0]);
  }
  i362.variableStartIndex = i370
  i362.JSONSerialization = i363[4]
  i362.fieldSerializationData = request.d('BehaviorDesigner.Runtime.FieldSerializationData', i363[5], i362.fieldSerializationData)
  i362.Version = i363[6]
  return i362
}

Deserializers["BehaviorDesigner.Runtime.FieldSerializationData"] = function (request, data, root) {
  var i376 = root || request.c( 'BehaviorDesigner.Runtime.FieldSerializationData' )
  var i377 = data
  var i379 = i377[0]
  var i378 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i379.length; i += 1) {
    i378.add(i379[i + 0]);
  }
  i376.typeName = i378
  var i381 = i377[1]
  var i380 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i381.length; i += 1) {
    i380.add(i381[i + 0]);
  }
  i376.fieldNameHash = i380
  var i383 = i377[2]
  var i382 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i383.length; i += 1) {
    i382.add(i383[i + 0]);
  }
  i376.startIndex = i382
  var i385 = i377[3]
  var i384 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i385.length; i += 1) {
    i384.add(i385[i + 0]);
  }
  i376.dataPosition = i384
  var i387 = i377[4]
  var i386 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Object')))
  for(var i = 0; i < i387.length; i += 2) {
  request.r(i387[i + 0], i387[i + 1], 1, i386, '')
  }
  i376.unityObjects = i386
  var i389 = i377[5]
  var i388 = new (System.Collections.Generic.List$1(Bridge.ns('System.Byte')))
  for(var i = 0; i < i389.length; i += 1) {
    i388.add(i389[i + 0]);
  }
  i376.byteData = i388
  var i391 = i377[6]
  var i390 = []
  for(var i = 0; i < i391.length; i += 1) {
    i390.push( i391[i + 0] );
  }
  i376.byteDataArray = i390
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i399 = data
  i398.name = i399[0]
  i398.tagId = i399[1]
  i398.enabled = !!i399[2]
  i398.isStatic = !!i399[3]
  i398.layer = i399[4]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i401 = data
  i400.name = i401[0]
  i400.width = i401[1]
  i400.height = i401[2]
  i400.mipmapCount = i401[3]
  i400.anisoLevel = i401[4]
  i400.filterMode = i401[5]
  i400.hdr = !!i401[6]
  i400.format = i401[7]
  i400.wrapMode = i401[8]
  i400.alphaIsTransparency = !!i401[9]
  i400.alphaSource = i401[10]
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i403 = data
  i402.name = i403[0]
  i402.index = i403[1]
  i402.startup = !!i403[2]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i405 = data
  i404.enabled = !!i405[0]
  i404.aspect = i405[1]
  i404.orthographic = !!i405[2]
  i404.orthographicSize = i405[3]
  i404.backgroundColor = new pc.Color(i405[4], i405[5], i405[6], i405[7])
  i404.nearClipPlane = i405[8]
  i404.farClipPlane = i405[9]
  i404.fieldOfView = i405[10]
  i404.depth = i405[11]
  i404.clearFlags = i405[12]
  i404.cullingMask = i405[13]
  i404.rect = i405[14]
  request.r(i405[15], i405[16], 0, i404, 'targetTexture')
  i404.usePhysicalProperties = !!i405[17]
  i404.focalLength = i405[18]
  i404.sensorSize = new pc.Vec2( i405[19], i405[20] )
  i404.lensShift = new pc.Vec2( i405[21], i405[22] )
  i404.gateFit = i405[23]
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i407 = data
  i406.pivot = new pc.Vec2( i407[0], i407[1] )
  i406.anchorMin = new pc.Vec2( i407[2], i407[3] )
  i406.anchorMax = new pc.Vec2( i407[4], i407[5] )
  i406.sizeDelta = new pc.Vec2( i407[6], i407[7] )
  i406.anchoredPosition3D = new pc.Vec3( i407[8], i407[9], i407[10] )
  i406.rotation = new pc.Quat(i407[11], i407[12], i407[13], i407[14])
  i406.scale = new pc.Vec3( i407[15], i407[16], i407[17] )
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i409 = data
  i408.enabled = !!i409[0]
  i408.planeDistance = i409[1]
  i408.referencePixelsPerUnit = i409[2]
  i408.isFallbackOverlay = !!i409[3]
  i408.renderMode = i409[4]
  i408.renderOrder = i409[5]
  i408.sortingLayerName = i409[6]
  i408.sortingOrder = i409[7]
  i408.scaleFactor = i409[8]
  request.r(i409[9], i409[10], 0, i408, 'worldCamera')
  i408.overrideSorting = !!i409[11]
  i408.pixelPerfect = !!i409[12]
  i408.targetDisplay = i409[13]
  i408.overridePixelPerfect = !!i409[14]
  return i408
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i411 = data
  i410.m_UiScaleMode = i411[0]
  i410.m_ReferencePixelsPerUnit = i411[1]
  i410.m_ScaleFactor = i411[2]
  i410.m_ReferenceResolution = new pc.Vec2( i411[3], i411[4] )
  i410.m_ScreenMatchMode = i411[5]
  i410.m_MatchWidthOrHeight = i411[6]
  i410.m_PhysicalUnit = i411[7]
  i410.m_FallbackScreenDPI = i411[8]
  i410.m_DefaultSpriteDPI = i411[9]
  i410.m_DynamicPixelsPerUnit = i411[10]
  i410.m_PresetInfoIsWorld = !!i411[11]
  return i410
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i413 = data
  i412.m_IgnoreReversedGraphics = !!i413[0]
  i412.m_BlockingObjects = i413[1]
  i412.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i413[2] )
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i415 = data
  i414.cullTransparentMesh = !!i415[0]
  return i414
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.UI.Image' )
  var i417 = data
  request.r(i417[0], i417[1], 0, i416, 'm_Sprite')
  i416.m_Type = i417[2]
  i416.m_PreserveAspect = !!i417[3]
  i416.m_FillCenter = !!i417[4]
  i416.m_FillMethod = i417[5]
  i416.m_FillAmount = i417[6]
  i416.m_FillClockwise = !!i417[7]
  i416.m_FillOrigin = i417[8]
  i416.m_UseSpriteMesh = !!i417[9]
  i416.m_PixelsPerUnitMultiplier = i417[10]
  request.r(i417[11], i417[12], 0, i416, 'm_Material')
  i416.m_Maskable = !!i417[13]
  i416.m_Color = new pc.Color(i417[14], i417[15], i417[16], i417[17])
  i416.m_RaycastTarget = !!i417[18]
  i416.m_RaycastPadding = new pc.Vec4( i417[19], i417[20], i417[21], i417[22] )
  return i416
}

Deserializers["MovePosHolderControler"] = function (request, data, root) {
  var i418 = root || request.c( 'MovePosHolderControler' )
  var i419 = data
  request.r(i419[0], i419[1], 0, i418, 'startSpawnPosition')
  request.r(i419[2], i419[3], 0, i418, 'startPosition')
  request.r(i419[4], i419[5], 0, i418, 'endSpawnPosition')
  request.r(i419[6], i419[7], 0, i418, 'endPosition')
  return i418
}

Deserializers["TableHolderController"] = function (request, data, root) {
  var i420 = root || request.c( 'TableHolderController' )
  var i421 = data
  return i420
}

Deserializers["TableController"] = function (request, data, root) {
  var i422 = root || request.c( 'TableController' )
  var i423 = data
  i422.reserveSit = !!i423[0]
  i422.onSit = !!i423[1]
  i422.hadServantOrder = !!i423[2]
  request.r(i423[3], i423[4], 0, i422, 'customer')
  return i422
}

Deserializers["CustomerHolderController"] = function (request, data, root) {
  var i424 = root || request.c( 'CustomerHolderController' )
  var i425 = data
  return i424
}

Deserializers["SpawnerBehaviour"] = function (request, data, root) {
  var i426 = root || request.c( 'SpawnerBehaviour' )
  var i427 = data
  request.r(i427[0], i427[1], 0, i426, 'customerObject')
  i426.minSpawnTime = i427[2]
  i426.maxSpawnTime = i427[3]
  return i426
}

Deserializers["MachineSpawnObjectController"] = function (request, data, root) {
  var i428 = root || request.c( 'MachineSpawnObjectController' )
  var i429 = data
  i428.isBusy = !!i429[0]
  i428.timeCounter = i429[1]
  request.r(i429[2], i429[3], 0, i428, 'timeFill')
  return i428
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i431 = data
  request.r(i431[0], i431[1], 0, i430, 'm_FirstSelected')
  i430.m_sendNavigationEvents = !!i431[2]
  i430.m_DragThreshold = i431[3]
  return i430
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i433 = data
  i432.m_HorizontalAxis = i433[0]
  i432.m_VerticalAxis = i433[1]
  i432.m_SubmitButton = i433[2]
  i432.m_CancelButton = i433[3]
  i432.m_InputActionsPerSecond = i433[4]
  i432.m_RepeatDelay = i433[5]
  i432.m_ForceModuleActive = !!i433[6]
  i432.m_SendPointerHoverToParent = !!i433[7]
  return i432
}

Deserializers["BehaviorDesigner.Runtime.BehaviorManager"] = function (request, data, root) {
  var i434 = root || request.c( 'BehaviorDesigner.Runtime.BehaviorManager' )
  var i435 = data
  i434.updateInterval = i435[0]
  i434.updateIntervalSeconds = i435[1]
  i434.executionsPerTick = i435[2]
  i434.maxTaskExecutionsPerTick = i435[3]
  return i434
}

Deserializers["VariableManager"] = function (request, data, root) {
  var i436 = root || request.c( 'VariableManager' )
  var i437 = data
  i436.tableHolder = request.d('BehaviorDesigner.Runtime.SharedGameObject', i437[0], i436.tableHolder)
  i436.movePosHolder = request.d('BehaviorDesigner.Runtime.SharedGameObject', i437[1], i436.movePosHolder)
  i436.customerHolder = request.d('BehaviorDesigner.Runtime.SharedTransform', i437[2], i436.customerHolder)
  i436.isDontDestroyOnLoad = !!i437[3]
  return i436
}

Deserializers["BehaviorDesigner.Runtime.SharedGameObject"] = function (request, data, root) {
  var i438 = root || request.c( 'BehaviorDesigner.Runtime.SharedGameObject' )
  var i439 = data
  request.r(i439[0], i439[1], 0, i438, 'mValue')
  i438.mIsShared = !!i439[2]
  i438.mIsGlobal = !!i439[3]
  i438.mIsDynamic = !!i439[4]
  i438.mName = i439[5]
  i438.mToolTip = i439[6]
  i438.mPropertyMapping = i439[7]
  request.r(i439[8], i439[9], 0, i438, 'mPropertyMappingOwner')
  return i438
}

Deserializers["BehaviorDesigner.Runtime.SharedTransform"] = function (request, data, root) {
  var i440 = root || request.c( 'BehaviorDesigner.Runtime.SharedTransform' )
  var i441 = data
  request.r(i441[0], i441[1], 0, i440, 'mValue')
  i440.mIsShared = !!i441[2]
  i440.mIsGlobal = !!i441[3]
  i440.mIsDynamic = !!i441[4]
  i440.mName = i441[5]
  i440.mToolTip = i441[6]
  i440.mPropertyMapping = i441[7]
  request.r(i441[8], i441[9], 0, i440, 'mPropertyMappingOwner')
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i443 = data
  i442.ambientIntensity = i443[0]
  i442.reflectionIntensity = i443[1]
  i442.ambientMode = i443[2]
  i442.ambientLight = new pc.Color(i443[3], i443[4], i443[5], i443[6])
  i442.ambientSkyColor = new pc.Color(i443[7], i443[8], i443[9], i443[10])
  i442.ambientGroundColor = new pc.Color(i443[11], i443[12], i443[13], i443[14])
  i442.ambientEquatorColor = new pc.Color(i443[15], i443[16], i443[17], i443[18])
  i442.fogColor = new pc.Color(i443[19], i443[20], i443[21], i443[22])
  i442.fogEndDistance = i443[23]
  i442.fogStartDistance = i443[24]
  i442.fogDensity = i443[25]
  i442.fog = !!i443[26]
  request.r(i443[27], i443[28], 0, i442, 'skybox')
  i442.fogMode = i443[29]
  var i445 = i443[30]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i445[i + 0]) );
  }
  i442.lightmaps = i444
  i442.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i443[31], i442.lightProbes)
  i442.lightmapsMode = i443[32]
  i442.mixedBakeMode = i443[33]
  i442.environmentLightingMode = i443[34]
  i442.ambientProbe = new pc.SphericalHarmonicsL2(i443[35])
  i442.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i443[36])
  i442.useReferenceAmbientProbe = !!i443[37]
  request.r(i443[38], i443[39], 0, i442, 'customReflection')
  request.r(i443[40], i443[41], 0, i442, 'defaultReflection')
  i442.defaultReflectionMode = i443[42]
  i442.defaultReflectionResolution = i443[43]
  i442.sunLightObjectId = i443[44]
  i442.pixelLightCount = i443[45]
  i442.defaultReflectionHDR = !!i443[46]
  i442.hasLightDataAsset = !!i443[47]
  i442.hasManualGenerate = !!i443[48]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i449 = data
  request.r(i449[0], i449[1], 0, i448, 'lightmapColor')
  request.r(i449[2], i449[3], 0, i448, 'lightmapDirection')
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i450 = root || new UnityEngine.LightProbes()
  var i451 = data
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i459 = data
  var i461 = i459[0]
  var i460 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i461.length; i += 1) {
    i460.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i461[i + 0]));
  }
  i458.ShaderCompilationErrors = i460
  i458.name = i459[1]
  i458.guid = i459[2]
  var i463 = i459[3]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( i463[i + 0] );
  }
  i458.shaderDefinedKeywords = i462
  var i465 = i459[4]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i465[i + 0]) );
  }
  i458.passes = i464
  var i467 = i459[5]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i467[i + 0]) );
  }
  i458.usePasses = i466
  var i469 = i459[6]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i469[i + 0]) );
  }
  i458.defaultParameterValues = i468
  request.r(i459[7], i459[8], 0, i458, 'unityFallbackShader')
  i458.readDepth = !!i459[9]
  i458.isCreatedByShaderGraph = !!i459[10]
  i458.usedBatchUniforms = i459[11]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i473 = data
  i472.shaderName = i473[0]
  i472.errorMessage = i473[1]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i478 = root || new pc.UnityShaderPass()
  var i479 = data
  i478.id = i479[0]
  i478.subShaderIndex = i479[1]
  i478.name = i479[2]
  i478.passType = i479[3]
  i478.grabPassTextureName = i479[4]
  i478.usePass = !!i479[5]
  i478.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[6], i478.zTest)
  i478.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[7], i478.zWrite)
  i478.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[8], i478.culling)
  i478.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i479[9], i478.blending)
  i478.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i479[10], i478.alphaBlending)
  i478.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[11], i478.colorWriteMask)
  i478.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[12], i478.offsetUnits)
  i478.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[13], i478.offsetFactor)
  i478.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[14], i478.stencilRef)
  i478.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[15], i478.stencilReadMask)
  i478.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[16], i478.stencilWriteMask)
  i478.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i479[17], i478.stencilOp)
  i478.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i479[18], i478.stencilOpFront)
  i478.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i479[19], i478.stencilOpBack)
  var i481 = i479[20]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i481[i + 0]) );
  }
  i478.tags = i480
  var i483 = i479[21]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( i483[i + 0] );
  }
  i478.passDefinedKeywords = i482
  var i485 = i479[22]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i485[i + 0]) );
  }
  i478.passDefinedKeywordGroups = i484
  var i487 = i479[23]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i487[i + 0]) );
  }
  i478.variants = i486
  var i489 = i479[24]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i489[i + 0]) );
  }
  i478.excludedVariants = i488
  i478.hasDepthReader = !!i479[25]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i491 = data
  i490.val = i491[0]
  i490.name = i491[1]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i493 = data
  i492.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i493[0], i492.src)
  i492.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i493[1], i492.dst)
  i492.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i493[2], i492.op)
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i495 = data
  i494.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i495[0], i494.pass)
  i494.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i495[1], i494.fail)
  i494.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i495[2], i494.zFail)
  i494.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i495[3], i494.comp)
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i499 = data
  i498.name = i499[0]
  i498.value = i499[1]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i503 = data
  var i505 = i503[0]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( i505[i + 0] );
  }
  i502.keywords = i504
  i502.hasDiscard = !!i503[1]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i509 = data
  i508.passId = i509[0]
  i508.subShaderIndex = i509[1]
  var i511 = i509[2]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( i511[i + 0] );
  }
  i508.keywords = i510
  i508.vertexProgram = i509[3]
  i508.fragmentProgram = i509[4]
  i508.readDepth = !!i509[5]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i515 = data
  request.r(i515[0], i515[1], 0, i514, 'shader')
  i514.pass = i515[2]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i519 = data
  i518.name = i519[0]
  i518.type = i519[1]
  i518.value = new pc.Vec4( i519[2], i519[3], i519[4], i519[5] )
  i518.textureValue = i519[6]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i521 = data
  i520.name = i521[0]
  request.r(i521[1], i521[2], 0, i520, 'texture')
  i520.aabb = i521[3]
  i520.vertices = i521[4]
  i520.triangles = i521[5]
  i520.textureRect = UnityEngine.Rect.MinMaxRect(i521[6], i521[7], i521[8], i521[9])
  i520.packedRect = UnityEngine.Rect.MinMaxRect(i521[10], i521[11], i521[12], i521[13])
  i520.border = new pc.Vec4( i521[14], i521[15], i521[16], i521[17] )
  i520.transparency = i521[18]
  i520.bounds = i521[19]
  i520.pixelsPerUnit = i521[20]
  i520.textureWidth = i521[21]
  i520.textureHeight = i521[22]
  i520.nativeSize = new pc.Vec2( i521[23], i521[24] )
  i520.pivot = new pc.Vec2( i521[25], i521[26] )
  i520.textureRectOffset = new pc.Vec2( i521[27], i521[28] )
  return i520
}

Deserializers["BehaviorDesigner.Runtime.GlobalVariables"] = function (request, data, root) {
  var i522 = root || request.c( 'BehaviorDesigner.Runtime.GlobalVariables' )
  var i523 = data
  i522.mVariableData = request.d('BehaviorDesigner.Runtime.VariableSerializationData', i523[0], i522.mVariableData)
  i522.mVersion = i523[1]
  return i522
}

Deserializers["BehaviorDesigner.Runtime.VariableSerializationData"] = function (request, data, root) {
  var i524 = root || request.c( 'BehaviorDesigner.Runtime.VariableSerializationData' )
  var i525 = data
  var i527 = i525[0]
  var i526 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i527.length; i += 1) {
    i526.add(i527[i + 0]);
  }
  i524.variableStartIndex = i526
  i524.JSONSerialization = i525[1]
  i524.fieldSerializationData = request.d('BehaviorDesigner.Runtime.FieldSerializationData', i525[2], i524.fieldSerializationData)
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i529 = data
  var i531 = i529[0]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i531[i + 0]) );
  }
  i528.files = i530
  i528.componentToPrefabIds = i529[1]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i535 = data
  i534.path = i535[0]
  request.r(i535[1], i535[2], 0, i534, 'unityObject')
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i537 = data
  var i539 = i537[0]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i539[i + 0]) );
  }
  i536.scriptsExecutionOrder = i538
  var i541 = i537[1]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i541[i + 0]) );
  }
  i536.sortingLayers = i540
  var i543 = i537[2]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i543[i + 0]) );
  }
  i536.cullingLayers = i542
  i536.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i537[3], i536.timeSettings)
  i536.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i537[4], i536.physicsSettings)
  i536.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i537[5], i536.physics2DSettings)
  i536.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i537[6], i536.qualitySettings)
  i536.enableRealtimeShadows = !!i537[7]
  i536.enableAutoInstancing = !!i537[8]
  i536.enableDynamicBatching = !!i537[9]
  i536.lightmapEncodingQuality = i537[10]
  i536.desiredColorSpace = i537[11]
  var i545 = i537[12]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( i545[i + 0] );
  }
  i536.allTags = i544
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i549 = data
  i548.name = i549[0]
  i548.value = i549[1]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i553 = data
  i552.id = i553[0]
  i552.name = i553[1]
  i552.value = i553[2]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i557 = data
  i556.id = i557[0]
  i556.name = i557[1]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i559 = data
  i558.fixedDeltaTime = i559[0]
  i558.maximumDeltaTime = i559[1]
  i558.timeScale = i559[2]
  i558.maximumParticleTimestep = i559[3]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i561 = data
  i560.gravity = new pc.Vec3( i561[0], i561[1], i561[2] )
  i560.defaultSolverIterations = i561[3]
  i560.bounceThreshold = i561[4]
  i560.autoSyncTransforms = !!i561[5]
  i560.autoSimulation = !!i561[6]
  var i563 = i561[7]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i563[i + 0]) );
  }
  i560.collisionMatrix = i562
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i567 = data
  i566.enabled = !!i567[0]
  i566.layerId = i567[1]
  i566.otherLayerId = i567[2]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'material')
  i568.gravity = new pc.Vec2( i569[2], i569[3] )
  i568.positionIterations = i569[4]
  i568.velocityIterations = i569[5]
  i568.velocityThreshold = i569[6]
  i568.maxLinearCorrection = i569[7]
  i568.maxAngularCorrection = i569[8]
  i568.maxTranslationSpeed = i569[9]
  i568.maxRotationSpeed = i569[10]
  i568.baumgarteScale = i569[11]
  i568.baumgarteTOIScale = i569[12]
  i568.timeToSleep = i569[13]
  i568.linearSleepTolerance = i569[14]
  i568.angularSleepTolerance = i569[15]
  i568.defaultContactOffset = i569[16]
  i568.autoSimulation = !!i569[17]
  i568.queriesHitTriggers = !!i569[18]
  i568.queriesStartInColliders = !!i569[19]
  i568.callbacksOnDisable = !!i569[20]
  i568.reuseCollisionCallbacks = !!i569[21]
  i568.autoSyncTransforms = !!i569[22]
  var i571 = i569[23]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i571[i + 0]) );
  }
  i568.collisionMatrix = i570
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i575 = data
  i574.enabled = !!i575[0]
  i574.layerId = i575[1]
  i574.otherLayerId = i575[2]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i577 = data
  var i579 = i577[0]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i579[i + 0]) );
  }
  i576.qualityLevels = i578
  var i581 = i577[1]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( i581[i + 0] );
  }
  i576.names = i580
  i576.shadows = i577[2]
  i576.anisotropicFiltering = i577[3]
  i576.antiAliasing = i577[4]
  i576.lodBias = i577[5]
  i576.shadowCascades = i577[6]
  i576.shadowDistance = i577[7]
  i576.shadowmaskMode = i577[8]
  i576.shadowProjection = i577[9]
  i576.shadowResolution = i577[10]
  i576.softParticles = !!i577[11]
  i576.softVegetation = !!i577[12]
  i576.activeColorSpace = i577[13]
  i576.desiredColorSpace = i577[14]
  i576.masterTextureLimit = i577[15]
  i576.maxQueuedFrames = i577[16]
  i576.particleRaycastBudget = i577[17]
  i576.pixelLightCount = i577[18]
  i576.realtimeReflectionProbes = !!i577[19]
  i576.shadowCascade2Split = i577[20]
  i576.shadowCascade4Split = new pc.Vec3( i577[21], i577[22], i577[23] )
  i576.streamingMipmapsActive = !!i577[24]
  i576.vSyncCount = i577[25]
  i576.asyncUploadBufferSize = i577[26]
  i576.asyncUploadTimeSlice = i577[27]
  i576.billboardsFaceCameraPosition = !!i577[28]
  i576.shadowNearPlaneOffset = i577[29]
  i576.streamingMipmapsMemoryBudget = i577[30]
  i576.maximumLODLevel = i577[31]
  i576.streamingMipmapsAddAllCameras = !!i577[32]
  i576.streamingMipmapsMaxLevelReduction = i577[33]
  i576.streamingMipmapsRenderersPerFrame = i577[34]
  i576.resolutionScalingFixedDPIFactor = i577[35]
  i576.streamingMipmapsMaxFileIORequests = i577[36]
  i576.currentQualityLevel = i577[37]
  return i576
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"30":[31],"32":[31],"33":[31],"34":[31],"35":[31],"36":[31],"37":[38],"39":[8],"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[41],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[49],"57":[49],"58":[49],"59":[49],"60":[49],"61":[49],"62":[8],"63":[64],"65":[66],"67":[66],"11":[10],"68":[8],"69":[10],"70":[10],"14":[11],"16":[15,10],"71":[10],"13":[11],"72":[10],"73":[10],"74":[10],"75":[10],"76":[10],"77":[10],"78":[10],"79":[10],"80":[10],"81":[15,10],"82":[10],"83":[10],"84":[10],"85":[10],"86":[15,10],"87":[10],"88":[24],"89":[24],"25":[24],"90":[24],"91":[8],"92":[8],"93":[10],"94":[64,10],"95":[10,15],"96":[10],"97":[15,10],"98":[64],"99":[15,10],"100":[10],"101":[102],"103":[102],"104":[2],"105":[106],"107":[102]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","CustomerController","BehaviorDesigner.Runtime.BehaviorTree","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","MovePosHolderControler","TableHolderController","TableController","CustomerHolderController","SpawnerBehaviour","UnityEngine.GameObject","MachineSpawnObjectController","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BehaviorDesigner.Runtime.BehaviorManager","VariableManager","UnityEngine.Texture2D","BehaviorDesigner.Runtime.GlobalVariables","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.16f1";

Deserializers.productName = "Idle_Food_Bar";

Deserializers.lunaInitializationTime = "06/24/2024 04:29:12";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "21615";

Deserializers.projectId = "aad00eb25fca1d347a05e4ea5128c7b1";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.6.4\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.com.unity.template.mobile2D";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.buildID = "df35ca6a-5628-4b21-8bae-c73d4135e678";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

