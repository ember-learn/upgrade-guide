/**
 * This trait represents the fields from the markdown files once they are processed into JSON.
 */
export const MdCommon = {
  name: 'md-common',
  fields: [
    { name: 'version', kind: 'attribute' },
    { name: 'changes', kind: 'attribute' },
    // html & content are not used, but they are in the data
    { name: 'html', kind: 'attribute' },
    { name: 'content', kind: 'attribute' },
  ],
};
