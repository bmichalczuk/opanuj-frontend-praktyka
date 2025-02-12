export enum message {
  NOTINTEGER = 'Invalid - empty or non integer',
  INVALID = 'Invalid number',
  VALID = 'Valid',
  CLEARED = '',
}

const result = document.getElementById('result') as HTMLElement;
export const setMessage = (msg: message) => {
  result.textContent = msg;
};
