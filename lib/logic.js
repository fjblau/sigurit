/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.sigurit.AddAllergyToUser} addAllergy
 * @transaction
 */
 function addAllergyToUser(addAllergy) {
   addAllergy.allergyUser.allergies.push(addAllergy.allergy)
   return getParticipantRegistry('org.example.biznet.AllergyUser')
         .then(function(assetRegistry) {
             return assetRegistry.update(addAllergy.allergyUser);
         });
 }
