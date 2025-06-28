var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.0633458839029366,
        "pitch": 0.05794857799089215,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.2890441269213957,
          "pitch": 0.2639999022446844,
          "rotation": 0,
          "target": "1-courtyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-courtyard",
      "name": "Courtyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.458257132013955,
        "pitch": 0.013780589882832928,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.4412811578604412,
          "pitch": 0.0434233079538906,
          "rotation": 0,
          "target": "0-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
