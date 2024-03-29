export const ErrorCodeEnum = {
  NotSupported: 'NotSupported', // NotSupported => Requested Action is recognized but not supported by the receiver
  InternalError: 'InternalError', // InternalError => An internal error occurred and the receiver was not able to process the requested Action successfully
  ProtocolError: 'ProtocolError', // ProtocolError => Payload for Action is incomplete
  SecurityError: 'SecurityError', // SecurityError => During the processing of Action a security issue occurred preventing receiver from completing the Action successfully
  FormationViolation: 'FormationViolation', // FormationViolation => Payload for Action is syntactically incorrect or not conform the PDU structure for Action
  PropertyConstraintViolation: 'PropertyConstraintViolation', // PropertyConstraintViolation => Payload is syntactically correct but at least one field contains an invalid value
  OccurenceConstraintViolation: 'OccurenceConstraintViolation', // OccurenceConstraintViolation => Payload for Action is syntactically correct but at least one of the fields violates occurence constraints
  TypeConstraintViolation: 'TypeConstraintViolation', // TypeConstraintViolation => Payload for Action is syntactically correct but at least one of the fields violates data type constraints (e.g. “somestring”: 12)
  GenericError: 'GenericError', // GenericError => Any other error not covered by the previous ones
};

export type ErrorCodeEnum = (typeof ErrorCodeEnum)[keyof typeof ErrorCodeEnum];
