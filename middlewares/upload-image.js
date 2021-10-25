const { format } = require('date-fns');
const multer = require('multer');


module.exports = (multer({
      storage:multer.diskStorage({
            destination: (req, file, callbak) =>{
                  callbak(null,'./public/upload' )
            },
            filename: (req,file,callbak) => {
                  callbak(null, format(Date.now(), "dd_MM_yyyy") + "-" + file.originalname)
            }
      }),

      fileFilter: (req, file, callbak) => {
            const extensaoImg = ['image/png', 'image/jpg', 'image/jpeg', 'image/bmp', 'image/gif'].find(formatoAceito => formatoAceito == file.mimetype);
            
            if(extensaoImg){
                  return callbak(null, true)
            }

            return callbak(null, false)
      }
}))