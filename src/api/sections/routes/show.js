import Section from '../model'

export default async function show (req, res, next) {
  try {
    const id = req.params.id
    const doc = await Section.findOne({ id }, '-_id -__v').exec()

    if (!doc) {
      const error = new Error(`Section with ID '${id}' does not exist.`)
      error.status = 404
      return next(error)
    }

    res.json(doc)
  } catch (ex) {
    return next(ex)
  }
}
