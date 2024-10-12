import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.systemui',
  name: '系统 UI',
  groups: [
    {
      key: 1,
      name: '功能-自动允许调试',
      rules: [
        {
          key: 0,
          name: '播放列表-右侧悬浮广告',
          fastQuery: true,
          activityIds:
            'null',
          matches: '[text="允许 USB 调试吗？"] <<2 LinearLayout +3 [id="android:id/buttonPanel"] >2 Button[text="允许"]',
          snapshotUrls: 'https://i.gkd.li/i/13348489',
        },
      ],
    },
});
