class BaseEntity {
  
  constructor() {
    this.createdAt = new Date();
    this.updatedAt = null;
    this.isDeleted = false;
  }

  static getBaseSchema() {
    return {
      createdAt: Date,
      updatedAt: Date,
      isDeleted: Boolean
    };
  }
} 

module.exports = BaseEntity;