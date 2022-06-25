// 下载文件
export const commonDownloadFile = (filedData: any, fileName: string) => {
  const blob = new Blob([filedData]);
  // 这里是通过<a>标签的download属性来判断是否是IE浏览器
  // 只有Firefox和Chrome(内核)支持download属性， IE10以上支持blob但依然不支持download
  if ('download' in document.createElement('a')) {
    const link = document.createElement('a');
    // a标签添加属性
    link.download = fileName;
    link.style.display = 'none';
    link.href = URL.createObjectURL(blob);
    document.body.appendChild(link);
    // 执行下载
    link.click();
    // 释放url
    URL.revokeObjectURL(link.href);
    // 释放标签
    document.body.removeChild(link);
  }
};
