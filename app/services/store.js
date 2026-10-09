import { useLegacyStore } from '@warp-drive/legacy';
import { JSONAPICache } from '@warp-drive/json-api';
import { ALL_SCHEMAS, ALL_TRAITS } from 'upgrade-guide/schemas';

const JsonSuffixHandler = {
  request(context, next) {
    const { request } = context;
    const updatedRequest = Object.assign({}, request, {
      url: `${request.url}.json`,
    });
    return next(updatedRequest);
  },
};

export default useLegacyStore({
  linksMode: false,
  cache: JSONAPICache,
  handlers: [JsonSuffixHandler],
  schemas: ALL_SCHEMAS,
  traits: ALL_TRAITS,
});
