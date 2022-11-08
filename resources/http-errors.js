module.exports = {
    httpErrors: {
        httpErrorTooManyEmailVerificationAttempts:
            'too many email verification attempts',
        httpErrorTooManyEmailVerificationRequests:
            'too many email verification requests',
        httpErrorTooManySmsVerificationAttempts:
            'too many sms verification attempts',
        httpErrorTooManySmsVerificationRequests:
            'too many sms verification requests',
        httpErrorTenantDataIsAbsent: 'tenant data is absent',
        httpErrorTenantDataMismatch: 'tenant data mismatch',
        httpErrorIncorrectToken: 'incorrect token',
        httpErrorInsufficientPermissions: 'insufficient permissions',
        httpErrorMaintenance: 'maintenance',
        httpErrorSchemaValidationError: 'schema validation error',
        httpErrorCareunitInconsistent: 'careunit inconsistent',
        httpErrorCareprofInconsistent: 'careprof inconsistent',
        httpErrorCanNotFindComar: 'can not find comar',
        httpErrorCanNotFindStatical: 'can not find statical',
        httpErrorStaticalCodeExists: 'statical code exists',
        httpErrorCanNotFindTemplate: 'can not find template',
        httpErrorTemplateCodeExists: 'template code exists',
        httpErrorCanNotFindMapping: 'can not find mapping',
        httpErrorCanNotFindMappingById: 'can not find mapping by id',
        httpErrorMappingCodeExists: 'mapping code exists',
        httpErrorCanNotFindReport: 'can not find report',
        httpErrorCanNotDeleteReport: 'can not delete report',
        httpErrorCanNotFindTemplateMetadata:
            'can not find template metadata',
        httpErrorTemplateDataAbsent: 'template data absent',
        httpErrorResourceFilesAreMissed: 'resource files are missed',
        httpErrorCanNotFindTemplateToUpdate:
            'can not find template to update',
        httpErrorCanNotFindTemplateToPatch:
            'can not find template to patch',
        httpErrorCanNotFindTemplateToDelete:
            'can not find template to delete',
        httpErrorIncorrectTenantOrCredentials:
            'incorrect tenant or credentials',
        httpErrorIncorrectCredentials: 'incorrect credentials',
        httpErrorWrongUserType: 'wrong user type',
        httpErrorIncorrectTenant: 'incorrect tenant',
        httpErrorGrandIdUsernameMissing: 'username missing',
        httpErrorCanNotFindArtefact: 'can not find artefact',
        httpErrorCanNotUpdateArtefactState: 'can not update artefact state',
        httpErrorPdfIsMissingOrCorrupted: 'pdf is missing or corrupted',
        httpErrorCanNotFindProcessInstance: 'can not find process instance',
        httpErrorCanNotFindTaskInstance: 'can not find task instance',
        httpErrorCanNotFindCareprof: 'can not find careprof',
        httpErrorCareprofNotExists: 'careprof not exists',
        httpErrorCareprofUsernameExists: 'careprof username exists',
        httpErrorCareprofPersonalNumberExists:
            'careprof personal number exists',
        httpErrorCareprofHsaidExists: 'careprof hsaid exists',
        httpErrorPasswordAuthNotAllowed: 'password auth not allowed',
        httpErrorLabelNameAlreadyExists: 'label name already exists',
        httpErrorCanNotFindLabel: 'can not find label',
        httpErrorCanNotFindCareunit: 'can not find careunit',
        httpErrorCareunitCodeExists: 'careunit code exists',
        httpErrorCareunitHsaidExists: 'careunit hsaid exists',
        httpErrorCareunitNotExists: 'careunit not exists',
        httpErrorCanNotFindPatient: 'can not find patient',
        httpErrorPatientPersonalNumberExists:
            'patient personal number exists',
        httpErrorInvalidEmailVerificationCode:
            'invalid email verification code',
        httpErrorInvalidSmsVerificationCode:
            'invalid sms verification code',
        httpErrorPatientNotExists: 'patient not exists',
        httpErrorLabelIdAlreadyAdded: 'label id already added',
        httpErrorCanNotFindProcessConfig: 'can not find process config',
        httpErrorCorrespondingProcessConfigExists:
            'corresponding process config exists',
        httpErrorPsdKeyExists: 'psd key exists',
        httpErrorPsdMetaDoesNotExists: 'psd meta does not exists',
        httpErrorPsdKeyCanNotBeChanged: 'psd key can not be changed',
        httpErrorCanNotFindItem: 'can not find item',
        httpErrorCanNotFindPsdMeta: 'can not find psd meta',
        httpErrorIncorrectDataValueType: 'incorrect data value type',
        httpErrorInconsistentCareunitCode: 'inconsistent careunit code',
        httpErrorCanNotFindMicroservice: 'can not find microservice',
        httpErrorBaseMsCanNotHaveTasks: 'base ms can not have tasks',
        httpErrorProcessMsShoudHaveTasks: 'process ms shoud have tasks',
        httpErrorMsidExists: 'msid exists',
        httpErrorCanNotFindTenantAdmin: 'can not find tenant admin',
        httpErrorTenantDoesNotExists: 'tenant does not exists',
        httpErrorAdminUsernameExists: 'admin username exists',
        httpErrorAdminUsernameCouldNotBeChanged:
            'admin username could not be changed',
        httpErrorCanNotFindAdmin: 'can not find admin',
        httpErrorCanNotFindTenant: 'can not find tenant',
        httpErrorTenantCodeExists: 'tenant code exists',
        httpErrorSomeMsDoesNotExists: 'some ms does not exists',
        httpErrorItIsNotYourProcessInstance:
            'it is not your process instance',
        httpErrorProcessInstanceIsNotActive:
            'process instance is not active',
        httpErrorTaskInstanceIsNotActive: 'task instance is not active',
        httpErrorPatientDataAbsent: 'patient data absent',
        httpErrorCareunitDataAbsent: 'careunit data absent',
        httpErrorTenantDataAbsent: 'tenant data absent',
        httpErrorCanNotFindCareunitProcessConfig:
            'can not find careunit process config',
        httpErrorIncorrectProcessConfig: 'incorrect process config',
        httpErrorProcessIsNotActive: 'process is not active',
        httpErrorProcessIsNotStandalone: 'process is not standalone',
        httpErrorForbiddenTemplateCode: 'forbidden template code',
        httpErrorTemplateChargingIsAbsent: 'template charging is absent',
        httpErrorAssessmentIsAlreadyCreated:
            'assessment is already created',
        httpErrorIncorrectPatient: 'incorrect patient',
        httpErrorAssessmentIsNotCreated: 'assessment is not created',
        httpErrorTemplateCodeCanNotBeChanged:
            'template code can not be changed',
        httpErrorBookingIsAlreadyCreated: 'booking is already created',
        httpErrorSlotIsNotAvailable: 'slot is not available',
        httpErrorCanNotFindCorrespondingBooking:
            'can not find corresponding booking',
        httpErrorBulletinIsNotCreated: 'bulletin is not created',
        httpErrorBulletinIsAlreadyCreated: 'bulletin is already created',
        httpErrorIncorrectCompleteOption: 'incorrect complete option',
        httpErrorCanNotFindInnerConfigOfTask:
            'can not find inner config of task',
        httpErrorTaskDataIsNotCreated: 'task data is not created',
        httpErrorMedicationsIsNotSavedLocally:
            'medications is not saved locally',
        httpErrorMiniqFullResultIsNotSaved:
            'miniq full result is not saved',
        httpErrorMiniqFullResultIsNotFound:
            'miniq full result is not found',
        httpErrorPdfIsNotCreated: 'pdf is not created',
        httpErrorTakecareDataIsAbsent: 'takecare data is absent',
        httpErrorTakecareDocIsNotCreated: 'takecare doc is not created',
        httpErrorListOfTermsCanNotBeEmpty: 'list of terms can not be empty',
        httpErrorUnexpecteDatabaseError: 'unexpecte database error',
        httpErrorEmrRequestTimeout: 'emr request timeout',
        httpErrorUnexpectedTakecareResponse: 'unexpected takecare response',
        httpErrorUnexpectedError: 'unexpected error'

    }

}