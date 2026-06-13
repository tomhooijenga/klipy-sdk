export interface PaginatedResponse {
  result: true;
  data: {
    current_page: number;
    per_page: number;
    has_next: boolean;
    meta: {
      // todo: find out what this is.
    };
  };
}

export interface Response {
  result: true;
  data: {};
}
