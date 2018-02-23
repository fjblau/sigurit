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
    } else {
        var factory = getFactory();
        var errorMsgEvent = factory.newEvent('org.sigurit', 'errorMsg');
        errorMsgEvent.errMsg = 'Already added this Allergy';
        emit(errorMsgEvent);
    }
  return getParticipantRegistry('org.sigurit.AllergyUser')
        .then(function(participantRegistry) {
            return participantRegistry.update(addAllergy.allergyUser);
        });
}

/**
 * Sample transaction
 * @param {org.sigurit.CheckAllergyForUser} checkAllergy
 * @transaction
 */
function checkAllergyForUser(checkAllergy) {
    var factory = getFactory();
    var checkedEvent = factory.newEvent('org.sigurit', 'checkedCode');
   
    if(!checkAllergy.allergyUser.Allergies.includes(checkAllergy.allergy)){
        checkedEvent.checkedReturn = 'N'
    } else {
        checkedEvent.checkedReturn = 'Y'
    };
    emit(checkedEvent);
}
