'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.sigurit.AddAllergyToUser} addAllergy
 * @transaction
 */
 function addAllergyToUser(addAllergy) {
   addAllergy.user.allergies.push(addAllergy.allergy)
   return getAssetRegistry('org.sigurit.User')
         .then(function (assetRegistry) {
             return assetRegistry.update(addAllergy.user);
         });
 }
