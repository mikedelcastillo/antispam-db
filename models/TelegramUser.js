const uuid4 = require('uuid').v4
var _ = require('lodash')
const { Model } = require('objection')

module.exports = class extends Model {
    static get tableName() {
        return __filename
            .split(require('path').sep).pop()
            .split(".").shift()
            .split(/(?=[A-Z])/g)
            .map(s=>s.toLowerCase()).join("_")
    }

    static get idColumn(){
        return `${this.tableName}_id`
    }
    
    static get relationMappings(){
        return {
            
        }
    }

    get $secureFields() {
        return []
    }

    $formatJson(json, options) {
        json = super.$formatJson(json, options)
        return _.omit(json, this.$secureFields)
    }

    $beforeInsert() {
        this.created_at = this.created_at || new Date(Date.now())
    }

    $beforeUpdate() {        
        this.updated_at = new Date(Date.now())
    }
}