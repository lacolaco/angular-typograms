// https://github.com/google/typograms/issues/3#issuecomment-1670746657

declare module 'typograms/src/typograms' {
  function create(
    source: string,
    zoom?: number,
    debug?: boolean
  ): SVGSVGElement;
  export = create;
}
