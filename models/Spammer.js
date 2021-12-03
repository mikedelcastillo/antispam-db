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

    static formatPhoneNumber(phone_number){
        phone_number = phone_number.replace(/[^0-9]/gmi, "")
        if(phone_number.startsWith("63")){
            phone_number = "0" + phone_number.substr(2)
        } else if(phone_number.startsWith("9")){
            phone_number = "0" + phone_number   
        }
        return phone_number
    }

    get $secureFields() {
        return []
    }

    beforeSet(){
        this.phone_number = this.constructor.formatPhoneNumber(this.phone_number)
        this.spammer_id = this.constructor.formatPhoneNumber(this.phone_number)
    }

    $formatJson(json, options) {
        json = super.$formatJson(json, options)
        return _.omit(json, this.$secureFields)
    }

    $beforeInsert() {
        this.beforeSet()
        this.created_at = this.created_at || new Date(Date.now())
    }

    $beforeUpdate() {      
        this.beforeSet()  
        this.updated_at = new Date(Date.now())
    }
}