/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.sigurit.AddAllergyToUser} addAllergy
 * @transaction
 */
 function addAllergyToUser(addAllergy) {
     if(!addAllergy.allergyUser.Allergies.includes(addAllergy.allergy)){
        addAllergy.allergyUser.Allergies.push(addAllergy.allergy)
     }
   return getParticipantRegistry('org.sigurit.AllergyUser')
         .then(function(participantRegistry) {
             return participantRegistry.update(addAllergy.allergyUser);
         });
 }
