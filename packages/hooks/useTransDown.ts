/**
 * 下拉动画
 * @returns 
 */
export default function useTransDown() {
  
  const beforeEnter = (el: Element) => {
    (el as HTMLElement).style.overflow = 'hidden';
    (el as HTMLElement).style.height = '0'; // 进入之前高度为 0
  }
  const enter = (el: Element) => {
    (el as HTMLElement).style.height = (el as HTMLElement).scrollHeight + 'px'; // 进入时高度变为内容高度
    (el as HTMLElement).style.transition = 'height var(--uc-animation-delay-2) var(--uc-animation-ease-in)'; // 设置过渡效果
  }
  const afterEnter = (el: Element) => {
    (el as HTMLElement).style.overflow = 'unset'
  }
  const leave = (el: Element) => {
    (el as HTMLElement).style.overflow = 'hidden';
    (el as HTMLElement).style.height = '0'; // 离开时高度变为 0
    (el as HTMLElement).style.transition = 'height var(--uc-animation-delay-2) var(--uc-animation-ease-in)'; // 设置过渡效果
  }

  return {
    beforeEnter,
    enter,
    afterEnter,
    leave
  }
}
