import { youtubeAtomModalState } from "@/atoms/youtubeModal.atom";
import { YoutubeModalType } from "@/types";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";
import { useRecoilValue, useSetRecoilState } from "recoil";
export default function YoutubeModal({}: YoutubeModalType) {
  const updateYoutubeModalState = useSetRecoilState(youtubeAtomModalState);
  const { videoId } = useRecoilValue(youtubeAtomModalState);

  const handleCloseModal = () => {
    updateYoutubeModalState({ isOpen: false, videoId: undefined });
  };
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center ">
        <div className="bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute"></div>
        <div className="w-full z-50 h-full px-6 relative max-w-4xl">
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="w-full relative">
              <div onClick={handleCloseModal}>
                <IoClose
                  fontSize={"35"}
                  className="cursor-pointer absolute -top-[60px] right-0 text-white"
                />
              </div>

              <YouTube
                videoId={videoId}
                loading="lazy"
                iframeClassName="w-full min-h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
