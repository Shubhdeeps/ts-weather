

export const getTime = (unix_timestamp: number): Date => {
    return  new Date(unix_timestamp * 1000);
  }

