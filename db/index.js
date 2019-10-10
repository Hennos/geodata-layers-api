function createDataBase() {
  const db = [
    {
      name: "simple-layer-1",
      childLayers: [],
      objects: {
        shape: "polygon",
        color: "red"
      }
    },
    {
      name: "simple-layer-2",
      childLayers: [],
      objects: {
        shape: "polyline",
        color: "blue"
      }
    },
    {
      name: "composite-layer-1",
      childLayers: [1],
      objects: {
        shape: "point",
        color: "green"
      }
    }
  ];
  return {
    getLayers: function() {
      return db.map(function(layer, index) {
        return {
          id: index,
          name: layer.name
        };
      });
    },
    getLayerConfig: function(id) {
      if (!db[id]) {
        return false;
      }
      return Object.assign(
        {
          id: id
        },
        db[id]
      );
    },
    createLayer: function(layer) {
      if (!layer) {
        return false;
      }
      db.push({
        name: layer.name,
        childLayers: layer.childLayers,
        objects: layer.objects
      });
      return db.length - 1;
    },
    updateLayer: function(id, layer) {
      if (!db[id]) {
        return false;
      }
      if (!layer) {
        return false;
      }
      db[id] = Object.assign({
        name: db[id].name,
        childLayers: layer.childLayers || db[id].childLayers,
        objects: layer.objects || db[id].objects
      });
      return id;
    }
  };
}

module.exports = createDataBase;
