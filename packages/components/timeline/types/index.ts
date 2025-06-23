
export interface UTimelineProps {
  items: UTimelineItemProps[];
}

export interface UTimelineItemProps {
  /**
   * @description 标题
   * @default ''
   */
  title: string;

  /**
   * @description 内容
   * @default ''
   */
  content: string;

  /**
   * @description 时间
   * @default ''
   */
  time: string | Date;

  /**
   * @description 位置
   * @default 'top'
   */
  position: 'top' | 'bottom';
}