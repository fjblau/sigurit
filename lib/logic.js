/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {AddAllergyToUser} addAllergy
 * @transaction
 */
 function addAllergyToUser(addAllergy) {
   addAllergy.allergyUser.allergies.push(addAllergy.allergy)
   return getParticipantRegistry('AllergyUser')
         .then(function(assetRegistry) {
             return assetRegistry.update(addAllergy.allergyUser);
         });
 }
