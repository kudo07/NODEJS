function pingProblem(req, res) {
  return res.json({ message: 'problem controller is up' });
}
module.exports = {
  pingProblem,
};
