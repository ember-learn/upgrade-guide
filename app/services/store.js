import { useLegacyStore } from '@warp-drive/legacy';
import { JSONAPICache } from '@warp-drive/json-api';

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
  schemas: [],
});
