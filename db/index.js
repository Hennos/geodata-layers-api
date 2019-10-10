module.exports = function() {
  const db = [];
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
      return Object.assign(
        {
          id: id
        },
        db[id]
      );
    },
    createLayer: function(layer) {
      db.push({
        name: layer.name,
        childLayers: layer.childLayers,
        objects: layer.objects
      });
      return db.length - 1;
    },
    updateLayer: function(id, layer) {
      if (db[id]) {
        db[id] = {
          name: layer.name,
          childLayers: layer.childLayers,
          objects: layer.objects
        };
        return id;
      }
      return false;
    }
  };
};
