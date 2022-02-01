class BaseEntity {
  
  constructor(){
  }
  static getBaseSchema() {
    return {
      createdAt: Date,
      updatedAt: Date,
      isDeleted: Boolean
    };
  }
  static getInitializedBaseObject() {
    return {
      createdAt: new Date(),
      updatedAt: null,
      isDeleted: false
    };
  }
} 

module.exports = BaseEntity;