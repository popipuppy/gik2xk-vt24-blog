const db = require ('../models');
const {
    createResponseSuccess,
    createResponseError,
    createResponseMessage
} = require ('../helpers/responseHelper');

async function getAll() {
    try {
        const allPost = await db.post.findAll();
    /* Om allt blev bra, returnera allPosts */
      return createResponseSuccess(allPost);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}

function create() {}
function update() {}
function destroy() {}

module.exports = { 
    getAll, 
    create,
     update, 
     destroy
};