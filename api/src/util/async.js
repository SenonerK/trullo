import logger from './logger'

export const asyncReq = handler => (req, res) => handler(req,res).catch(err=>{
    logger.error(err);
    res.status(500).send({message: "Internal server error", err})
})