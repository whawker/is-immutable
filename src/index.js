const IS_ITERABLE = '@@__IMMUTABLE_ITERABLE__@@';
const IS_RECORD = '@@__IMMUTABLE_RECORD__@@';

export default function isImmutable (obj) {
  return !!(obj && (obj[IS_ITERABLE] || obj[IS_RECORD]) && !obj.__ownerID);
}
