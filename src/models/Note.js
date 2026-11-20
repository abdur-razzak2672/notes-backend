import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true, trim: true, maxlength: 200 },
    content: { type: String, default: '', maxlength: 10000 },
  },
  { timestamps: true, versionKey: false }
);

noteSchema.index({ user: 1, _id: -1 });

export default mongoose.model('Note', noteSchema);
