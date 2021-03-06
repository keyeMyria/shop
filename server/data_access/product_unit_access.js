var Datastore = require('nedb');
var algorithm = 'aes256';
var key = 'password';
const db = new Datastore({
    filename: './server/database/product_unit.db', autoload: true
});

module.exports = {
    saveData: function (param) {
        db.insert(param.data, function (err, doc) {
            if (err)
                param.error(err);
            else
                param.callBack(doc);
        });
    },

    getData: function (param) {
        db.findOne(param.data, function (err, doc) {
            if (err)
                param.error(err);
            else
                param.callBack(doc);
        });
    },

    listData: function (param) {
        queryObj = {}
        if (param.data.query != undefined && param.data.query != '') {
            queryObj = { $or: [{ "nme": param.data.query }, { "des": param.data.query }] }
        }
        db.find(queryObj, function (err, docs) {
            if (err)
                param.error(err);
            else
                param.callBack(docs);
        });
    }
}