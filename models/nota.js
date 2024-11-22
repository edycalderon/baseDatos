'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Nota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User)
    }
  }


  Nota.init({
    nota: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Notas',
  });
  return Nota;
};